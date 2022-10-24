import * as React from 'react';
import {useState} from 'react';
import { Animated, Text, View, Linking } from 'react-native';
import Botao from "../Botao";
import {tamanhos} from "../Tamanhos";
import Styles from "../Styles";
import { colors } from '../Colors'


const Ajuda = ({navigation}) => {
    const [fonte] = useState(new Animated.Value(tamanhos.padraoPequeno));
    Animated.spring(fonte, {
        toValue: tamanhos.padraoMedio,
        speed: 10,
        bounciness: 30,
    }).start();

    return (

        <View style={Styles.container}>

            <Animated.Text style={[Styles.paragraph, {fontSize: fonte}]}> Página de Ajuda. </Animated.Text>

            <Text style={[Styles.text, {fontSize: 15}]}>Endereço: Close to nowhere.</Text>

            <Text style={[Styles.text, {fontSize: 15}]}>
                Horário de funcionamento: Segunda à Sexta de 08:00 - 14:00h.
            </Text>

            <Text style={[Styles.text, {fontSize: 15}]}>
                Número para contato: (32)123456789.
            </Text>

            <Botao style={Styles.botao}
                cor={colors.botaoVermelho}
                label="Home"
                action={() => navigation.goBack()}
            />
            <Text style={[Styles.text, {fontSize: 15}]}>
                Acesse no Botão Abaixo o Repositório do Projeto.
            </Text>
            <Botao style={Styles.botao}
                cor={colors.botaoAzul}
                label="GitHub"
                action={() => { 
        Linking.openURL('https://github.com/Gabrielgoc99/Trabalho_Final_React');}}
            />
        </View>
    );
}

export default Ajuda;

