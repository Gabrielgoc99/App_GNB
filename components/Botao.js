import * as React from 'react';
import {Button, View} from "react-native";
import Styles from "./Styles";


export const Botao = (props) => {
    return (
        <View style={Styles.botao}>
            <Button
                color={props.cor}
                title={props.label}
                onPress={props.action}
            />
        </View>
    );
}
export default Botao;