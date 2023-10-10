import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import Styles from './styles/Styles';
import Header from './components/Header';

export default function App() {

  const [estado, setarEstado] = useState('leitura')
  const [anotacao, setarAnotacao] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const anotacaoLeitura = await AsyncStorage.getItem('anotacao')
        setarAnotacao(anotacaoLeitura)
      } catch (error) {}
    })()
  }, [])

  setData = async() => {
    try {
      await AsyncStorage.setItem('anotacao', anotacao)
    } catch (error) {}

    alert('Salvo')
  }

  function atualizarTexto(){
    setarEstado('leitura')
    setData()
  }

  if(estado == 'leitura'){
    return (
      <View style={{flex:1}}>
        <StatusBar hidden />
        <Header />
        <View style={{margin: 20}}>
          <View>
            <Text style={Styles.anotacao}>{anotacao}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {setarEstado('atualizando')}} style={Styles.btnAnotacao}>
          {
            anotacao == '' ? <Text style={Styles.btnAnotacaoTexto}>+</Text>
            : <Text style={{fontSize:12, color:'white', textAlign:'center', marginTop:16}}>Editar</Text>
          }
         </TouchableOpacity>
      </View>
    );  
  } else {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden />
        <Header />
        <View style={{margin: 20}}>
          <Text style={{fontWeight:'bold'}}>Editar:</Text>
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={5}
            value={anotacao}
            onChangeText={
              (text) => {
                setarAnotacao(text)
              }
            }
            style={Styles.textInput}
          >
          </TextInput>
        </View>
        <TouchableOpacity onPress={() => {atualizarTexto()}} style={Styles.btnSalvar}>
          <Text style={Styles.btnSalvarTexto}>Salvar</Text>
         </TouchableOpacity>
      </View>
    );
  }
  
}
