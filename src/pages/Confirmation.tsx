import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Confirmation(){
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

const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    emoji: {
        fontSize: 72
    },
    title:{ 
        fontSize: 22,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 50
    },
    subtitle:{
        fontSize: 16,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        paddingVertical: 10
    },
    footer: {
        alignItems: 'center',
        marginTop: 60,
        width: '100%',
        paddingHorizontal: 50
    }

})