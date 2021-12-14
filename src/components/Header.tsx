import React from 'react'
import { Text, TouchableOpacityProps, View, StyleProp, ViewStyle } from 'react-native'
import { Avatar } from './Avatar'
import { Style } from './Header.style'

interface HeaderProps{
    name : string,
    image?: number,
    style?: StyleProp<ViewStyle>,
    onPressAvatar?: () => void,
    emptyText?: string
}

export function Header ( { name, image, style, onPressAvatar, emptyText }: HeaderProps){
    const styles = Style()
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá, </Text>
                <Text style={styles.userName}>{name}</Text>
            </View>
            <Avatar size={72} style={styles.avatar} emptyText={emptyText}/>
        </View>
    )
}

