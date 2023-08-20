import { Alert, View } from "react-native";
import { Input, Text, Button } from "native-base";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const URL = 'http://192.168.0.109:8080/api/register'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const navigation = useNavigation()

    const handleSubmit = async () => {
        if (email === '' || password === '' || rePassword === '') {
            Alert.alert('Todos los campos son obligatorios!', 'Por favor complete todos los campos.')
        }
        else if(password !== rePassword){
            Alert.alert('Las contraseñas no coinciden!', 'Por favor revise los campos.')
        }else{
            const newUser = {
                email: email,
                password: password,
                passwordConfirmation: rePassword
            }

            try{
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify(newUser)
                })

                if(response.ok) {
                    const responseData = await response.json()

                    Alert.alert(
                        'Usuario registrado correctamente.',
                        'Presione ok para redirigirse a Login',
                        [
                            { text: 'Aceptar', onPress: () => navigation.navigate('Login') }
                        ]
                    )
                }else{
                    Alert.alert('Error al registrar el usuario', 'Hubo un error en el servidor.')
                }
            }catch(error){
                console.error("Error al enviar la solicitud: ", error)
                Alert.alert('Error', 'Hubo un error al enviar la solicitud')
            }

        }


    }

    return (
        <View style={{ padding: 15 }}>
            <Text fontSize="lg" marginY='3'>Ingrese los campos:</Text>
            <Input
                variant="rounded"
                placeholder="Email"
                backgroundColor='#FFF'
                mb='5'
                onChangeText={texto => setEmail(texto)} //Recordar usar onChangeText y no onChange solito
            />
            <Input
                variant="rounded"
                placeholder="Password"
                type="password"
                backgroundColor='#FFF'
                mb='5'
                onChangeText={texto => setPassword(texto)}
            />
            <Input
                variant="rounded"
                placeholder="Password confirm"
                type="password"
                backgroundColor='#FFF'
                mb='5'
                onChangeText={texto => setRePassword(texto)}
            />
            <Button
                mb='5'
                onPress={() => handleSubmit()}
            >
                <Text>REGISTRAR USUARIO</Text>
            </Button>
        </View>
    );
}

export default Register;