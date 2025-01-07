import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, Image , StyleSheet} from "react-native";


import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";

import { ThemeProvider } from "styled-components/native";
import {  useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import {  useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "./src/Intrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons"; 

import { restaurantsRequest } from "./src/services/restaurants/restaurants.service"
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

import { LocationContextProvider } from "./src/services/location/location.context";

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


  const Tab = createBottomTabNavigator();
  const SettingsScreen = () => null;
  const MapScreen = () => null;

  const TAB_ICON = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "settings",
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  return (

    <>
      <ThemeProvider theme={theme}>
      <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator 
                  screenOptions={createScreenOptions}
                  tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "gray",
                  }}
              >
                
                  <Tab.Screen name="Restaurants" component={RestaurantScreen} />
                  <Tab.Screen name="Map" component={MapScreen} />
                  <Tab.Screen name="Settings" component={SettingsScreen} 
                  />

              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
        <ExpoStatusBar style="auto" />
    </>
  );
}
