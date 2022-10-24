import * as React from 'react';
import { useState, useRef } from 'react';
import { Text, View, Animated } from 'react-native';
import Input from "../Input";
import Botao from "../Botao";
import Styles from "../Styles";
import { colors } from "../Colors";
import { tamanhos } from '../Tamanhos';
import { auth } from './Config/FirebaseConfig';


const Cadastro = ({navigation}) => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState(null);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [altura] = useState(new Animated.Value(20));
    const [largura] = useState(new Animated.Value(20));

    Animated.timing(largura, {
        toValue: tamanhos.padraoLarguraCadastro,
        duration: 3000,
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAlturaCadastro,
        duration: 3000,
    }).start();

    const fadeIn = () => {    
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000
      }).start();
    };
  
    const fadeOut = () => {    
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000
      }).start();
    };

    return (

        <View style={Styles.container}>
            <Text style={Styles.text}>Cadastrar Usuário</Text>
            <Input style={Styles.Input}
                placeholder="Usuario"
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
                label="Cadastrar"
                action={() => navigation.navigate("Home")}
            />
            <Botao style={Styles.botao}
                cor={colors.botaoVermelho}
                label="Home"
                action={() => navigation.navigate("Home")}
            />

            <Animated.Image source={require("../../assets/GNB.jpg")}
                            style={{alignSelf: 'center', width: largura, height: altura, backgroundColor: 'gray'}}
            />

          <View style={{marginTop: 40}}>
            <Botao style={Styles.botao}
              label="Termos" 
              action={fadeIn} 
              cor={colors.botaoCinza} />
          </View>

          <Animated.View
            style={[
            Styles.fadingContainer,
            {            
              opacity: fadeAnim
            }
          ]}
          >
          <Text style={Styles.fadingText}>Ao clicar no botão cadastrar, você confirma que está ciente e aceita os termos de serviço.</              Text>
        
          </Animated.View>


        </View>
    );
}

export default Cadastro;

