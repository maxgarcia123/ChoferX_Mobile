import { StyleSheet } from "react-native";
import { fonts,colors } from '../theme'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secudary,
        justifyContent: 'space-evenly',       
      },
      title: {
          fontFamily: fonts.primaryBold,
          fontSize: 50,
          color: '#fff',
          alignSelf: 'center',
      },
      input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginTop: 4,
      },
      inputBlock: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10
      },
      buttonsContainer:{
        paddingTop: 100 
      },
       buttons:{
        backgroundColor: colors.ternary,
        height: 56,
        width: 300,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',       
      },
      ButtonText: {
        color: '#fff',
        fontFamily: fonts.primaryBold,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 15
     },
})

export default styles;