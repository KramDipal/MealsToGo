
import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated, user, isLoading } = useContext(AuthenticationContext);
  console.log(`isAuthenticated ${isAuthenticated}, ${user} , ${isLoading}`);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};