import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const Style = () => StyleSheet.create({
    container:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        //padding:20
    },
    greeting:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading
    },
    userName:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 40
    }, 
    avatar:{
         
    }
  });