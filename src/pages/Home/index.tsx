import React from 'react';
import styles from './styles';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

//import logoImg from '../../assets/images/logo.png';
import homeImg from '../../assets/images/landing.png';

import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import purpleHeartIcon from '../../assets/images/icons/heart.png';

function Home() {
    const navegacao = useNavigation();

    function handleNavegarParaDarAulas() {
        navegacao.navigate('DarAulas');
    }

    function handleNavegarParaEstudar() {
        navegacao.navigate('Estudar');
    }

    return (
        <View style={styles.container}>
            <Image source={homeImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavegarParaEstudar} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavegarParaDarAulas} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />

                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConections}>
                Total de 245 conexões já realizadas {' '}
                <Image source={purpleHeartIcon} />
            </Text>
        </View>
    )
}

export default Home;