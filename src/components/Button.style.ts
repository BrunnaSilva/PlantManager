import { StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const Style = () => StyleSheet.create({
    container:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 250
    },
    text:{
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 22
    },
  });