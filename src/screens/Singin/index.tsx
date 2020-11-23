import React, { useContext, useState }  from 'react';
import {View, Text, TextInput} from  'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AuthContext from '../../contexts/auth';

import { useNavigation } from "@react-navigation/native"
import styles from './styles'

const Landing: React.FC = () => {
    const  {signed,signIn} = useContext(AuthContext)
    const navigation = useNavigation()
    const [ email, setEmail ] = useState("")
    const [ password, setPasseword ] = useState("")
    console.log(signed)

    async function hadlesingIn(){
       signIn();
    }

    return(
        <View style={styles.container}>
            <View style={{marginTop: 100}}>
              <Text style={styles.title}>ChoferEX</Text>
            </View>
            <View>
              <View style={styles.inputBlock}>
                <TextInput 
                  style={styles.input}
                  value={email}
                  placeholder="Email" 
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText={text => setEmail(text)}
                />
              </View>
              <View style={styles.inputBlock}>
                <TextInput 
                    style={styles.input}
                    value={password}
                    placeholder="Senha" 
                    secureTextEntry={true} 
                    onChangeText={text => setPasseword(text)}
                  />
              </View>

            </View>
            <View style={styles.buttonsContainer}>
              <RectButton style={styles.buttons} onPress={hadlesingIn}> 
                <Text style={styles.ButtonText}>Entrar</Text>
              </RectButton>
            </View>            
        </View>
    )
}
  
export default Landing;