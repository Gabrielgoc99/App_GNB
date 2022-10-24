import * as React from 'react';
import { Text, View, Animated } from 'react-native';
import Styles from '../Styles';
import { useState } from 'react';
import { tamanhos } from '../Tamanhos';
import { Botao } from '../Botao';
import { colors } from '../Colors';
import { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { auth } from './Config/FirebaseConfig';
import {onAuthStateChanged} from "firebase/auth";


const Home = ({navigation}) => {

  const Logoff = () => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            
            const uid = user.uid;
            navigation.navigate("Login")

        } else {
          alert ("Erro!")
           
        }
    });

}

const modalizeRef = useRef(null);

  const openModalize = () => {
      modalizeRef.current?.open();
  };

  const closeModalize = () => {
    modalizeRef.current?.close();
  };

  

  const [altura] = useState(new Animated.Value(15));
  const [largura] = useState(new Animated.Value(10));
  const [banner] = useState (new Animated.Value(30));
  const [alturaTower] = useState(new Animated.Value(20));
  const [larguraTower] = useState(new Animated.Value(20));

    Animated.timing(largura, {
        toValue: tamanhos.padraoLargura,
        duration: 3000,
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAlturaHome,
        duration: 3000,
    }).start();

    Animated.timing(larguraTower, {
        toValue: tamanhos.padraoGigante,
        duration: 3000,
    }).start();

    Animated.timing(alturaTower, {
        toValue: tamanhos.padraoAlturaCadastro,
        duration: 3000,
    }).start();

    Animated.loop(Animated.sequence([Animated.decay(banner,{ velocity:0.5, deceleration:0.999, toValue:tamanhos.padraoAlturaHome})])).start();
    

  return (
      <View style={Styles.container}>

        <Text style={Styles.paragraph}>Bem vindo ao Goliath National Bank!</Text>
        <Animated.Image source={require("../../assets/GNB_Wait_For_It.jpg")}
                            style={{alignSelf: 'center', width: largura, height: altura, marginBottom: 10, marginTop: 10}}
        />

        <Botao style={Styles.botao}
                cor={colors.botaoCinza}
                label="Info"
                action={openModalize}
        />
        
        <Modalize
        ref={modalizeRef}
          snapPoint={480}
          modalHeight={700}>
        <View style={Styles.viewModalize}>
          <Animated.Text style={Styles.paragraph}>Goliath National Bank</Animated.Text>
          <Text style={Styles.fraseText}>
            1. Temos as melhores taxas do mercado.<br></br>
            ---------------------------------------<br></br>
            2. Financiamento de veículos com as melhores taxas do mercado.<br></br>
            ---------------------------------------<br></br>
            3. Crédito Estudantil sem comprovação de renda.<br></br>
            ---------------------------------------<br></br>
            4. Consórcios com contratação sem burocracia.<br></br>
            ---------------------------------------<br></br>
            5. Abra já sua conta aqui no APP.<br></br>
            ---------------------------------------<br></br>            
          </Text>
          <Botao style={Styles.botao}
                cor={colors.botaoCinza}
                label="Fechar"
                action={closeModalize}
          />   
        </View>
      </Modalize> 

        <Botao style={Styles.botao}
                cor={colors.botaoVermelho}
                label="Abrir Conta"
                action={() => navigation.navigate("Conta")}
        />

        <Botao style={Styles.botao}
                cor={colors.botaoVermelho}
                label="Logoff"
                action={Logoff}
        />
        <Animated.Image source={require("../../assets/Goliath_Tower.png")}
                            style={{alignSelf: 'center', width: larguraTower, height: alturaTower, marginBottom: 10, marginTop: 10}}
        />
      
      </View>
    );
}

export default Home;

