import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../../screens/SignIn/Register";
import LogIn from "../../screens/SignIn/LogIn";
import ForgotPassword from "../../screens/SignIn/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function SignInStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "purple", height: 80 },
        headerShown: false,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
