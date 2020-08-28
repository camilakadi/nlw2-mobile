import React from 'react';

import  { NavigationContainer } from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import DarAulas from '../pages/DarAulas';
import EstudoTabs from './EstudoTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Home" component={Home} />
                <Screen name="DarAulas" component={DarAulas} />
                <Screen name="Estudar" component={EstudoTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;