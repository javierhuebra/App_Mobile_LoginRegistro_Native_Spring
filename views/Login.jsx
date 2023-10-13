import { useState } from "react";
import { View, Alert } from "react-native";
import { Input, Text, Button, useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";

import globalStyles from "../styles/global";

const URL = 'http://192.168.0.109:8080/api/login'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const toast = useToast();

    const handleSubmit = async () => {
        if (email === '' || password === '') {
            Alert.alert('Ambos los campos son obligatorios!', 'Por favor complete todos los campos.')
        } else {
            const userLoginRequest = {
                email,
                password
            }

            try {
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify(userLoginRequest)
                })

                if (response.ok) {
                    const responseData = await response.json()//Se parsea de json porque es un objeto
                    //console.log(responseData)
                    toast.show({ description: `¡Bienvenido ${responseData.email}!` })
                    navigation.navigate('Home', { data: responseData })

                } else {
                    const responseData = await response.text()//Si la respuesta no es ok me manda un string, por eso no se puede parsear a json
                    if (response.status == 401) {
                        Alert.alert(`Mensaje del servidor: ${responseData}`)
                    } else {
                        Alert.alert("Error de servidor.")
                    }
                }
            } catch (error) {
                console.error("Error al enviar la solicitud: ", error)
            }
        }
    }

    return (
        <View style={globalStyles.container}>
            <View>
                <Input
                    variant="rounded"
                    placeholder="Email"
                    backgroundColor='#FFF'
                    mb='5'
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    variant="rounded"
                    placeholder="Password confirm"
                    type="password"
                    backgroundColor='#FFF'
                    mb='5'
                    onChangeText={text => setPassword(text)}
                />
                <Button
                    style={globalStyles.botonGrande}
                    onPress={() => handleSubmit()}
                >
                    <Text style={globalStyles.textBotonGrande}>LOG IN</Text>
                </Button>
            </View>
        </View>
    );
}

export default Login;