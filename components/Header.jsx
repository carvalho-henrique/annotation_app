import Styles from "../styles/Styles";
import { View, Text } from "react-native";


const Header = () => {
    return (
        <View style={Styles.header}>
          <Text style={Styles.header_text}>Aplicativo Anotação</Text>
        </View>
    )
}

export default Header