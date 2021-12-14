import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const Style = () => StyleSheet.create({
    container:{
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5
    },
    title:{
        color: colors.heading,
        fontFamily: fonts.text
    },
    containerActive: {
        fontFamily: fonts.heading,
        color: colors.green,
        backgroundColor: colors.green_light
    },
    titleActive:{
        color: colors.green_dark,
        fontFamily: fonts.heading
    }
  });