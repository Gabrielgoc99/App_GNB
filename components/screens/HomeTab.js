import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Prova1 from "../Prova1/Prova1";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Prova2 from "../Prova2/Prova2";


const HomeTab = () => {

    const Tab = createBottomTabNavigator();


    return (

        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;

                    if (route.name === 'Tela Inicial') {
                        iconName = "home-outline"

                    } else if (route.name === 'Prova 1' ) {
                        iconName = "newspaper-outline"
                    } else if (route.name === 'Prova 2') {
                        iconName = "newspaper"
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },

                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Tela Inicial" component={Home}/>
            <Tab.Screen name={"Prova 1"} component={Prova1} />
            <Tab.Screen name={"Prova 2"} component={Prova2} options={{header: () => null}}/>

        </Tab.Navigator>
    );
}

export default HomeTab;
