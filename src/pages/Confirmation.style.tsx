import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


const Styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    emoji: {
        fontSize: 72
    },
    title:{ 
        fontSize: 22,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 50
    },
    subtitle:{
        fontSize: 16,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        paddingVertical: 10
    },
    footer: {
        alignItems: 'center',
        marginTop: 60,
        width: '100%',
        paddingHorizontal: 50
    }

})

export default Styles