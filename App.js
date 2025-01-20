import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components/native";

import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import {  useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import {  useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/Intrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

import { LocationContextProvider } from "./src/services/location/location.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/Intrastructure/navigation";

import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrwL7pjqWiabundy_Z54apBMH_3mRvRiw",
  authDomain: "mealstogo-1c3b1.firebaseapp.com",
  projectId: "mealstogo-1c3b1",
  storageBucket: "mealstogo-1c3b1.firebasestorage.app",
  messagingSenderId: "560908338144",
  appId: "1:560908338144:web:6eb4743c481238c634e185"
};


if(initializeApp(firebaseConfig) !== null){
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {
       persistence: getReactNativePersistence(ReactNativeAsyncStorage)
   })
}


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (

    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
        <ExpoStatusBar style="auto" />
    </>
  );
}
