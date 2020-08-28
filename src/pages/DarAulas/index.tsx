import React from 'react';
import styles from './styles';
import { View, ImageBackground, Text } from 'react-native';

import darAulasBgImg from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function DarAulas() {
    const { goBack } = useNavigation();

    function handleNavegarVolta() {
        goBack()
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={darAulasBgImg} style={styles.content}>
                <Text style={styles.title}>Quer ser um proffy?</Text>
                <Text style={styles.description}>
                    Para começar, bla bla bla
                </Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavegarVolta}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default DarAulas;