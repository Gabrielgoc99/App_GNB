import * as React from 'react';
import {useState} from 'react';
import {Image, Text, View} from "react-native";
import Botao from "../Botao";
import Styles from "../Styles";

export const BalaoDaSorte = () => {
    const [imagem, setImagem] = useState(require('../../assets/balloon_red.jpg'));
    const [frase, setFrase] = useState('');

    const frases = ['Grandezas em Pequenos Começos',
        'Melhor chegar atrasado neste mundo do que adiantado no outro',
        'Lute como os boletos, eles sempre vencem!',
        'Pra quem não tem nada, metade é o dobro',
        'As coisas podem piorar, você é que não tem imaginação!',
        'Perigo não é um cavalo na pista, mas sim um burro na direção',
        'Se casamento fosse bom não precisaria de testemunhas',
        'Às vezes é melhor ficar quieto e deixar que pensem que você é um idiota, do que abrir a boca e não deixar nenhuma dúvida.'
    ];

    const estourar = () => {
        let indice = Math.floor(Math.random() * (7 + 1));
        setImagem(require('../../assets/popped_balloon_red.jpg'));
        setFrase(frases[indice]);
    }

    const resetar = () => {
        setImagem(require('../../assets/balloon_red.jpg'));
        setFrase('');
    }

    return (
        <View style={Styles.container}>
            <Image style={{marginBottom: 30, width: 200, height: 350}} source={imagem}/>
            <View style={Styles.frase}>
              <Text style={Styles.fraseText}>{frase}</Text>
            </View>
            <Botao style={Styles.botao}
                cor='red'
                label='estourar'
                action={estourar}
            />
            <Botao style={Styles.botao}
                cor='gray'
                label='Resetar'
                action={resetar}
            />
        </View>
    );
}

export default BalaoDaSorte;
