import { View,  StyleSheet, Alert, Image, Dimensions } from "react-native";

//Importo useNavigation para la navegación
import { useNavigation } from "@react-navigation/native";

import {Text, Button } from 'native-base'

import globalStyles from "../styles/global";

const screenWidth = 350;
const imgHeight = screenWidth * 0.3775811

const Index = () => {
    const navigation = useNavigation()
    

    return (
        <View style={[globalStyles.container, styles.container]}>
            <Image
                style={styles.imagen}
                source={{ uri: 'https://www.fondationforge.org/aws-chile/images/Logo-sin%20solapa_blanco-01.png' }} // Cambia la URL por la de la imagen que deseas mostrar
            />
            <View style={styles.semiCircle}></View>
            <Image
                style={styles.imagen}
                source={{ uri: 'https://the-winston-project.imgix.net/610beec5aea874132acbafda/26_codingdojo-logo.png' }} // Cambia la URL por la de la imagen que deseas mostrar
            />

            <Text fontSize='2xl'>Configurando Login por API</Text>
            <Text fontSize='xl' textAlign='center'>Este es el index, acá puede elegir si registrarse o loguearse!</Text>
            <View style={styles.contBotones}>
                <Button
                    style={globalStyles.botonChico}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={globalStyles.textBotonChico} fontSize='md'>Login</Text>
                </Button>
                <Button
                    style={globalStyles.botonChico}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={globalStyles.textBotonChico} fontSize='md'>Register</Text>
                </Button>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
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
        zIndex: 10
    },

    semiCircle:{
        width: Dimensions.get('window').width,
        height: 400,
        backgroundColor: 'black',
        position:'absolute',
        zIndex: 1,
        borderRadius: 350,
        top: -200,
        opacity: 0.1

    }
});
export default Index;