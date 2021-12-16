import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core'

import { Button } from '../components/Button'
import Style from './Confirmation.style';

export function Confirmation(){
    const styles = Style
    const navigation = useNavigation()

    function handlerSubmit (){
        navigation.navigate("PlantSelect")
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    🌵
                </Text>
                <Text style={styles.title}>Prontinho</Text>
                <Text style={styles.subtitle}>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Text>
                <View style={styles.footer}>
                    <Button text="Começar" onPress={handlerSubmit}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

