import React from "react";
import {TextInput} from "react-native";
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";
import Styles from "./Styles";

const Input = (props) => {
    return (
        <View>

            <TextInput
                style={Styles.input}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
            />
        </View>
    );
};


export default Input;