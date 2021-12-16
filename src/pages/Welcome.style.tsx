import { StyleSheet, Dimensions } from "react-native";
import colors from '../styles/colors';
import fonts from '../styles/fonts'

const Styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: 20
    },
    title:{
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      marginTop: 58,
      fontFamily: fonts.heading
    },
    subtitle:{
      textAlign: 'center',
      fontSize: 18,
      paddingHorizontal: 20,
      color: colors.heading,
      fontFamily: fonts.text
    },
    image:{
        height: Dimensions.get('window').width * 0.7
    },
    buttonContainer: {
      paddingBottom: 20
    }
  });

  export default Styles