import React from 'react'
import { StyleProp, Text, TouchableOpacityProps, ViewStyle, TouchableOpacity, Image } from 'react-native'
import { Style } from './Avatar.style'

interface AvatarProps {
    size: number,
    image?: number,
    style?: StyleProp<ViewStyle>,
    onPressAvatar?: () => void,
    emptyText?: string
}

export function Avatar ( { size, image, style, onPressAvatar, emptyText}: AvatarProps){
    const styles = Style()

    return (
        <TouchableOpacity 
            disabled={!onPressAvatar} 
            onPress={onPressAvatar} 
            style={[styles.container, !image && styles.emptyImage, {height: size, width: size, borderRadius:size/2}, style]}
        >
            {!image ? (
                <Text style={[styles.text, {fontSize: size*0.36}]}>{emptyText}</Text>
            ) : (<Image source={image} style={styles.imageContainer} />)}
        </TouchableOpacity>
    )
}