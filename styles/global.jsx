import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    botonChico:{
        width: 130,
        borderRadius: 50,
        backgroundColor: '#37AEDE'
    },
    botonGrande:{
        borderRadius: 50,
        backgroundColor: '#37AEDE'
    },

    textBotonGrande:{
        color:'#ffffff',
        fontWeight:'bold'
    },

    textBotonChico:{
        color:'#ffffff',
        
    },

    container:{
        flex: 1,
        backgroundColor:'F7F7F7',
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        
        
    }
})

export default globalStyles