import React from 'react'
import { Text} from 'react-native'
import { RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { Style } from './EnviromentButton.style'

interface EnviromentButtonProps extends RectButtonProps{
    title: string,
    active?: boolean
}

export function EnviromentButton ({title, active=false, ...rest}: EnviromentButtonProps){
    const styles = Style()

    return (
        <RectButton style={[styles.container, active && styles.containerActive]} {...rest}>
            <Text style={[styles.title, active && styles.titleActive]}>
                {title}
            </Text>
        </RectButton>
    )
}