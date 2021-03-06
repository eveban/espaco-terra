import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Ubuntu_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="#495b43"
        networkActivityIndicatorVisible
        animated
      />
      <Routes />
    </>
  );
}
