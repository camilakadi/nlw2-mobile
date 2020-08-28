import React from 'react';
import styles from './styles';
import { View, Image, Text } from 'react-native';

import voltarIcone from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
//import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    const { navigate } = useNavigation();
    function handleVoltar() {
        navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleVoltar}>
                    <Image source={voltarIcone} resizeMode='contain' />
                </BorderlessButton>

                <Image source={logoImage} resizeMode='contain' />
            </View>

            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default PageHeader;