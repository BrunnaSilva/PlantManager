import { StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const Style = () => StyleSheet.create({
    container:{
        alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.green_dark
    },
    emptyImage:{
        backgroundColor: colors.white
    },
    text:{
        color: colors.green_dark,
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      fontFamily: fonts.text,
      letterSpacing: 0.03,
      fontWeight: '700'
    },
    imageContainer: {
        flex: 1,
      width: '100%'
    }
  });