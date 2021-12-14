import React from 'react'
import {  View, Text, Image } from 'react-native'
import { Style } from './Load.style'
import LottieView from 'lottie-react-native'
import loadAnimation from '../assets/load.json'

interface LoadProps {

}

export function Load ( {}:LoadProps){
    const styles = Style()

    return (
        <View style={styles.container}>
            <LottieView source={loadAnimation} autoPlay loop style={styles.animation}/>
        </View>
    )
}

