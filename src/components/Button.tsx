import React from 'react'
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { Style } from './Button.style'

interface ButtonProps extends TouchableOpacityProps{
    text : string
}

export function Button ( {text, ...rest }: ButtonProps){
    const styles = Style()

    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}