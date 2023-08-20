# Aplicación con login y registro genérico Mobile para futuros proyectos

## Envia peticiones http para concretar un registro y un login, fue desarrollado con una api en Spring Boot para realizar las pruebas.

## Lo que contiene:

- Paginas de navegación
- Solicitudes http
- Librería de UI native base 

<img src='/capturas/cap1.PNG'>
<img src='/capturas/cap2.PNG'>
<img src='/capturas/cap3.PNG'>
<img src='/capturas/cap4.PNG'>



REACT NAVIGATION:

DEPENDENCIAS USADAS PARA REACT NAVIGATION + IMPORTS (Atencion el return del app debe estar contenido en <></> sino no anda)

- npm install @react-navigation/native

- npm install react-native-screens

- npm install react-native-safe-area-context

- npm install @react-navigation/native-stack

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

--------------------------------------------------------------
NATIVE BASE:

- A la hora de crear la app con la ultima version al dia del 19/08/2023 tuve un warning desde native base cuando utilicé las siguientes dependencias:

npm install native-base react-native-svg@12.1.1 react-native-safe-area-context@3.3.2

Ignoré la advertencia utilizando los recursos de react para tal situación:

useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

La advertencia sigue en metro pero no se muestra en la ui de la app. Tambien se puede borrar y eliminar de raiz el error pero no lo probé porque lleva un par de pasos extras.

-------------------------------------------------------------

