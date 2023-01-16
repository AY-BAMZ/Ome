import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DrawerNav from "./DrawerNav";
import SignInStack from "./SignInStack/SignInStack";
import { useAuthContext } from "../api/auth/AuthContext";

const Stack = createNativeStackNavigator();

export default function MainNav() {
  const  {user} = useAuthContext()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignInStack"
        screenOptions={{
          headerShown: false,
        }}
      >
        {
          user === null ? 
          <Stack.Screen name="DrawerNav" component={DrawerNav} />:
          <Stack.Screen name="SignInStack" component={SignInStack} /> 
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
