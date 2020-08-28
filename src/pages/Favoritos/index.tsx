import React from 'react';
import styles from './styles';
import { View, ImageBackground, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';

//import darAulasBgImg from '../../assets/images/give-classes-background.png';
//import { RectButton } from 'react-native-gesture-handler';
//import { useNavigation } from '@react-navigation/native';

function Favoritos() {

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Favoritos" />
        </View>
    );
}

export default Favoritos;