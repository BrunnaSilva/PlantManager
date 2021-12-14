import { StyleSheet } from 'react-native';
import colors from '../styles/colors';

export const Style = () => StyleSheet.create({
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width:56
    },
    buttonText:{
        color: colors.white
    },
    buttonIcon: {
        fontSize: 18
    }
  });