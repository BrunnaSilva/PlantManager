import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import { Button } from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function UserIdentification(){
    const [isFocused, setisFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>()
    const navigation = useNavigation()

    function handlerInputBlur(){
        setisFocused(false)
        setIsFilled(!!name)
    }
    function handlerInputFocus(){
        setisFocused(true)
    }
    function handlerInputChange(value: string){
        setIsFilled(!!value)
        setName(value)
    }
    async function handlerSubmit(){
        if(!name)
            return Alert.alert('Oi, eu gostaria de saber seu nome')
        
        await AsyncStorage.setItem('@plantmanage:user', name)
        navigation.navigate('Confirmation')
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}> 
                                <Text style={styles.emoji}>{ isFilled? '🥰' : '😁' }</Text>
                                <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
                            </View>
                            <TextInput style={[styles.input, (isFocused || isFilled) && {borderColor: colors.green}]} 
                                        placeholder="Digite um nome" 
                                        onBlur={handlerInputBlur} 
                                        onFocus={handlerInputFocus} 
                                        onChangeText={handlerInputChange}
                            />
                            <View style={styles.footer}>
                                <Button text="Confirmar" onPress={handlerSubmit}/>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
        width: '100%'
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title:{ 
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer: {
        alignItems: 'center',
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }

})