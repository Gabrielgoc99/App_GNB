import * as React from 'react';
import { useState } from 'react';
import { Animated, View } from 'react-native';
import Botao from "../Botao";
import Styles from "../Styles";
import { tamanhos } from "../Tamanhos";
import { colors } from "../Colors";


const HomeProva2 = ({navigation}) => {

    const [fonte] = useState(new Animated.Value(tamanhos.padraoPequeno));
    const [altura] = useState(new Animated.Value(20));
    const [largura] = useState(new Animated.Value(20));

    Animated.timing(largura, {
        toValue: tamanhos.padraoLargura,
        duration: 5000,
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAltura,
        duration: 5000,
    }).start();

    Animated.spring(fonte, {
        toValue: tamanhos.padraoGrande,
        speed: 10,
        bounciness: 30,
    }).start();

    return (

        <View style={Styles.container}>
            <Animated.Text style={[Styles.paragraph, {fontSize: fonte}]}> Seja Bem-vindo ao Goliath National Bank! </Animated.Text>
            <Animated.Image source={require("../../assets/GNB.jpg")}
                            style={{alignSelf: 'center', width: largura, height: altura, backgroundColor: 'gray'}}
            />

            <Botao style={Styles.botao}
                cor={colors.botaoAzul}
                label="Ajuda"
                action={() => navigation.navigate("Ajuda")}

            />
        </View>
    );
}

export default HomeProva2;

