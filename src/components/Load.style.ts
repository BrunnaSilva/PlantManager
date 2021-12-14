import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const Style = () => StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    animation: {
      backgroundColor: 'transparent',
      width: 200,
      height: 200
    }
    
  });