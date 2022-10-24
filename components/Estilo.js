import {StyleSheet} from 'react-native';

export default StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },

    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue',
    },

    imagem: {
        height: 300,
        width: 200,
        alignSelf: "center",
    },

    botao: {
        width: 300,
        height: 50,
        alignSelf: 'center',
    },

   input: {
        height: 40,
        margin: 12,
        width: 300,
        borderWidth: 1,
        padding: 10,
        alignSelf: 'center',
    },

    text: {
        margin: 24,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',

    },

    slider: {
        width:300,
        height:40,
        alignSelf:'center'
    },

    switch:{
        true:"#81b0ff",
        false: "#767577",
        ativado:"#f5dd4b",
        desativado:"#f4f3f4",
        alignSelf:"center"
    },
    label:{

        fontSize: 16,
        marginLeft:'525px'

    },
    touch: {
        alignItems: "center",
        backgroundColor: "#81b0ff",
        padding: 10,
        width: 300,
        height: 40,
        alignSelf:"center"
    }
});