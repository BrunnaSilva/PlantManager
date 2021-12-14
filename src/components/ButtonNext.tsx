import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Style } from './ButtonNext.style'
import { Entypo } from '@expo/vector-icons'

interface ButtonNextProps extends TouchableOpacityProps{
    
}

export function ButtonNext ({...rest}: ButtonNextProps){
  const styles = Style()
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
          <Text style={styles.buttonText}> 
              <Entypo name="chevron-thin-right" style={styles.buttonIcon}/>
          </Text>
      </TouchableOpacity>
    )
}