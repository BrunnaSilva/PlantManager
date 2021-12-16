import { StyleSheet } from "react-native"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.background,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    header:{
        paddingHorizontal: 20
    },
    title:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20,
    },
    listContainer:{
        marginTop: 18,
        marginBottom: 18
    },
    enviromentList:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginRight: 32
    },
    plants:{
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center'
    }
})

export default Styles