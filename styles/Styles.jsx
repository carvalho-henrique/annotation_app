import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: '#069',
    },
    header_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    anotacao: {
        fontSize: 14
    },
    btnAnotacao: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 50,
        height:50,
        backgroundColor: '#069',
        borderRadius:25
    },
    btnAnotacaoTexto: {
        color: 'white',
        position: 'relative',
        textAlign: 'center',
        top: 4,
        fontSize: 30
    },
    btnSalvar: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 100,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: '#069',
    },
    btnSalvarTexto: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    textInput: {
        height:300,
        textAlignVertical:'top',
    }
})

export default Styles