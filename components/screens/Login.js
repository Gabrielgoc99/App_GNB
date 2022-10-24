import * as React from 'react';
import { useState, useRef } from 'react';
import { Text, View, Animated, Image } from 'react-native';
import Input from "../Input";
import Botao from "../Botao";
import Home from "./Home";
import Styles from "../Styles";
import { colors } from "../Colors";
import { tamanhos } from '../Tamanhos';
//import firebase from 'firebase';



const Login = ({navigation}) => {

  

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState(null);
    const [altura] = useState(new Animated.Value(20));
    const [largura] = useState(new Animated.Value(20));
    const [banner] = useState (new Animated.Value(50));

    Animated.timing(largura, {
        toValue: tamanhos.padraoLarguraCadastro,
        duration: 3000,
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAlturaCadastro,
        duration: 3000,
    }).start();

    Animated.loop(Animated.sequence([Animated.decay(banner,{ velocity:0.5, deceleration:0.997})])).start();

    return (
        
        <View style={Styles.container}>

          <Text style={Styles.paragraph}>Bem Vindo ao Goliath National Bank</Text>
            
            <Animated.Image source={require("../../assets/GNB.jpg")}
                            style={{alignSelf: 'center', width: largura, height: altura, backgroundColor: 'gray', marginBottom: 10,                        marginTop: 10}}
            />
            
            <Input style={Styles.Input}            
                placeholder="Usuário"
                onChangeText={setUsuario}
                value={usuario}
            />
            <Input style={Styles.Input}
                placeholder="Senha"
                onChangeText={setSenha}
                value={senha}
            />
            <Botao style={Styles.botao}
                cor={colors.botaoAzul}
                label="Entrar"
                action={() => navigation.navigate("Home")}
            />
            <Botao style={Styles.botao}
                cor={colors.botaoVermelho}
                label="Cadastrar"
                action={() => navigation.navigate("Cadastro")}
            />
            <Image source={require('../../assets/GNB_2.jpeg')} style={{ flexDirection:"columns", height:200, width:300,                         marginTop: 10}}> 
            </Image>
        </View>
    );
}

export default Login;

