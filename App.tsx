import React from 'react';
import { StatusBar, SafeAreaView, LogBox } from 'react-native';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Routes from './src/routes';
import theme from './src/theme';
import { AuthProvider } from './src/context/AuthContext';

LogBox.ignoreAllLogs();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: theme.dimensions.Thin1,
          backgroundColor: theme.colors.neutral_black,
        }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.neutral_black}
        />

        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SafeAreaView>
    </>
  );
}
