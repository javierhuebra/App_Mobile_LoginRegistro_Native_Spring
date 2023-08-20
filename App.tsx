import React, { useEffect } from 'react';

//Importo el provider de native base para usarla
import { NativeBaseProvider } from "native-base";


//Importacion de recursos para navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importacion de recursos para UI
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox
} from 'react-native';

//Importación de vistas
import Login from './views/Login';
import Index from './views/Index';
import Register from './views/Register';
import Home from './views/Home';


//Creo el stack para la navegacion
const Stack = createNativeStackNavigator();




const App = () => {


  //Este use
  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

  return (
    <>
      <NativeBaseProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor='black'
        />

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: 'none', // Cambia la animación aquí
            }}
            //ruta en la que se inicia
            initialRouteName='Index'
          >
            <Stack.Screen
              name="Index"
              component={Index}
              options={{
                title: "Index",

                //Anular la barra de navegacion
                headerShown: false
              }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: "Iniciar Sesión"
              }}
            />

            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                title: "Registrar usuario"
              }}
            />

            <Stack.Screen
              name="Home"
              component={Home}
              /* options={({ route }) => ({
                  title: route.params.data.email,
                  headerBackVisible:false
                })} */
                options={{
        
                  //Anular la barra de navegacion
                  headerShown: false
                }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}


export default App;
