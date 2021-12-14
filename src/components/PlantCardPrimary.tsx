import React from 'react'
import {  View, Text, Image } from 'react-native'
import { RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'
import { Style } from './PlantCardPrimary.style'

interface PlantProps extends RectButtonProps {
   data: {
       name: string,
       photo: string
   }
}

export function PlantCardPrimary ( { data, ...rest }: PlantProps){
    const styles = Style()

    return (
        <RectButton style ={styles.container} {...rest}>
            <SvgFromUri uri={data.photo} width={70} height={70}/>
            <Text style={styles.text}>{data.name}</Text>
        </RectButton>
    )
}

