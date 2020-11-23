import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native'
import React from 'react';

import {AuthProvider} from './src/contexts/auth';
import Routes from './src/routes';

import { AppLoading } from 'expo';
import {Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo';
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {
  return (
    <NavigationContainer>
      <AuthProvider>
           <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
  }
}
