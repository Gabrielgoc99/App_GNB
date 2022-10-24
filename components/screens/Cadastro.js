import * as React from 'react';
import {useRef, useState} from 'react';
import {Animated, Text, View} from 'react-native';
import Input from "../Input";
import Botao from "../Botao";
import Styles from "../Styles";
import {colors} from "../Colors";
import {tamanhos} from '../Tamanhos';
import {auth} from '../screens/Config/FirebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Cadastro = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [altura] = useState(new Animated.Value(20));
    const [largura] = useState(new Animated.Value(20));

    const Cadastrar = () => {

        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                
                const user = userCredential.user;
                navigation.navigate('Home');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setEmail("");
                setSenha("");
                setConfirmarSenha("");
            })
    }

    const Validar = () => {

        if (email.includes("@") && email.includes(".com") && senha === confirmarSenha && senha.length >= 6) {
            Cadastrar()
        } else {
            alert("Você deve fornecer um Email válido e senha de no mínio 6 dígitos!")
        }
    }


    Animated.timing(largura, {
        toValue: tamanhos.padraoLarguraCadastro,
        duration: 3000,
        useNativeDriver: false
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAlturaCadastro,
        duration: 3000,
        useNativeDriver: false
    }).start();

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: false
        }).start();
    };

    return (

        <View style={Styles.container}>
            <Text style={Styles.text}>Cadastrar Usuário</Text>
            <Input style={Styles.Input}
                   placeholder="Usuario"
                   onChangeText={setEmail}
                   value={email}
            />


            <Input style={Styles.Input}
                   placeholder="Senha"
                   onChangeText={setSenha}
                   value={senha}
                   secure="true"
            />
            <Input style={Style.Input}
                   placeholder="Confirmar Senha"
                   onChangeText={setConfirmarSenha}
                   value={confirmarSenha}
                   secure="true"
            />

            <Botao style={Styles.botao}
                   cor={colors.botaoAzul}
                   label="Cadastrar"
                   action={Validar}
            />

            <Animated.Image source={require("../../assets/GNB.jpg")}
                            style={{alignSelf: 'center', width: largura, height: altura, backgroundColor: 'gray'}}
            />

            <View style={{marginTop: 40}}>
                <Botao style={Styles.botao}
                       label="Termos"
                       action={fadeIn}
                       cor={colors.botaoCinza}/>
            </View>

            <Animated.View
                style={[
                    Styles.fadingContainer,
                    {
                        opacity: fadeAnim
                    }
                ]}
            >
                <Text style={Styles.fadingText}>Ao clicar no botão cadastrar, você confirma que está ciente e aceita os
                    termos de serviço.</              Text>

            </Animated.View>


        </View>
    );
}

export default Cadastro;