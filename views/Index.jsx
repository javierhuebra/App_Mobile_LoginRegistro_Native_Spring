import { View, Text, StyleSheet, Alert, Image, Dimensions } from "react-native";

//Importo useNavigation para la navegación
import { useNavigation } from "@react-navigation/native";

import { Button } from 'native-base'
const screenWidth = 350;
const imgHeight = screenWidth * 0.3775811
 
const Index = () => {
    const navigation = useNavigation()


    return (
        <View style={styles.container}>
             <Image
                style={styles.imagen}
                source={{ uri: 'https://www.fondationforge.org/aws-chile/images/Logo-sin%20solapa_blanco-01.png' }} // Cambia la URL por la de la imagen que deseas mostrar
            />
            <Image
                style={styles.imagen}
                source={{ uri: 'https://the-winston-project.imgix.net/610beec5aea874132acbafda/26_codingdojo-logo.png' }} // Cambia la URL por la de la imagen que deseas mostrar
            />
           
            <Text style={styles.titulo}>Configurando Login por API</Text>
            <Text style={styles.subTitulo}>Este es el index, acá puede elegir si registrarse o loguearse!</Text>
            <View style={styles.contBotones}>
                <Button
                    width={130}
                    onPress={() => navigation.navigate('Login')}
                >
                    Login
                </Button>
                <Button
                    width={130}
                    onPress={() => navigation.navigate('Register')}
                >
                    Registro
                </Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent:'space-around',
        alignItems:'center'

    },

    titulo: {
        fontSize: 25,
        textAlign: 'center',

    },

    subTitulo: {
        fontSize: 20,
        textAlign: 'center'
    },

    contBotones: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        //width: Dimensions.get('window').width //Ta lindo esto para saber el ancho de la pantalla
        width: 450
    },

    imagen: {
        width: screenWidth, // Ancho de la pantalla
        height: imgHeight, // Alto de la pantalla
        resizeMode: 'contain', // Mantiene la proporción sin deformar
    }
});
export default Index;