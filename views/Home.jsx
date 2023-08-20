import { View, StyleSheet } from "react-native";
import { Text, Button } from 'native-base'
import { useNavigation } from "@react-navigation/native";
const Home = ({ route }) => {
    const { data } = route.params;
    //console.log(data)
    const navigation = useNavigation()

    return (
        <View style={styles.contenedor}>
            <Text color='green.700'>Logeado existosamente pa</Text>
            <View style={styles.header}>
                <Text fontSize='3xl' >El objeto usuario {data.email} ya esta en esta screen</Text>
            </View>
            <Text fontSize='3xl' >Por ejemplo, aca tenes la fecha de creación papá {data.createdAt}. Continuará...</Text>
            <Button
                onPress={() => navigation.navigate('Index')}
            >CERRAR SESION</Button>
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        justifyContent:'center'
    },
    header:{
        backgroundColor:'lightblue',
        padding: 5
    }
})

export default Home;