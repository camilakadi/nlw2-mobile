import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaProfessores from '../pages/ListaProfessores';
import Favoritos from '../pages/Favoritos';
import { Ionicons } from '@expo/vector-icons';
//import { View, ImageBackground, Text } from 'react-native';

//import darAulasBgImg from '../../assets/images/give-classes-background.png';
//import { RectButton } from 'react-native-gesture-handler';
//import { useNavigation } from '@react-navigation/native';

const { Navigator, Screen } = createBottomTabNavigator();

function EstudoTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen name="ListaProfessores" component={ListaProfessores}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return(
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />
            <Screen name="Favoritos" component={Favoritos}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return(
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />
        </Navigator>

    );
}

export default EstudoTabs;