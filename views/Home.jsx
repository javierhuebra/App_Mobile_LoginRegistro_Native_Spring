import { View, StyleSheet } from "react-native";
import { Text, Button } from 'native-base'
import { useNavigation } from "@react-navigation/native";

import globalStyles from "../styles/global";

const Home = ({ route }) => {
    const { data } = route.params;
    //console.log(data)
    const navigation = useNavigation()

    return (
        <View style={globalStyles.container}>
            <Text color='green.700'>Logeado existosamente pa</Text>
            <View style={styles.header}>
                <Text fontSize='3xl' >El objeto usuario {data.email} ya esta en esta screen</Text>
            </View>
            <Text fontSize='3xl' >Por ejemplo, aca tenes la fecha de creación papá {data.createdAt}. Continuará...</Text>
            <Button
                style={globalStyles.botonGrande}
                onPress={() => navigation.navigate('Index')}
            >
                <Text style={globalStyles.textBotonGrande}>CERRAR SESIÓN</Text>
                </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        backgroundColor: 'lightblue',
        padding: 5
    }
})

export default Home;