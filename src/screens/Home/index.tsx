import React, { useContext, useEffect, useState }  from 'react';
import {TouchableOpacity, View, StyleSheet} from  'react-native';
import {Icon} from "react-native-elements";

import AuthContext from '../../contexts/auth';

import MapView from 'react-native-maps';
import Search from '../../components/Search';

import { DrawerContentComponentProps, DrawerScreenProps} from '@react-navigation/drawer'
import { colors } from '../theme';

interface Props {
  navigation: DrawerContentComponentProps<any>
}

const Home: React.FC< Props > = ({ navigation }) => {
    const  {signOut} = useContext(AuthContext)
    const  [region, setRegion] = useState<any>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({coords: { latitude, longitude }}) => {
               setRegion({
                  latitude, 
                  longitude, 
                  latitudeDelta: 0.0143,
                  longitudeDelta: 0.0134
                })
            }, //sucess
            () => {}, //error
            {
              timeout: 2000,
              enableHighAccuracy: true,
              maximumAge: 1000,
            }
        )
    },[])

    return(
        <View style={styles.container}>
           <MapView 
             region={region}         
             style={styles.mapStyle}
             showsUserLocation
             loadingEnabled
           />
           <TouchableOpacity
            style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: 20, marginTop: 25 }}
            onPress={() => navigation.openDrawer()}
          >
            <Icon name="menu" type="entypo" size={40} color={colors.secudary} />
          </TouchableOpacity>
           <Search/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mapStyle: {
      flex:1
    },
  });
  
export default Home;