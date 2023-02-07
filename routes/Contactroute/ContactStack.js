import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactUs from "../../screens/ContactUs/ContactUs";
import SendMessage from "../../screens/ContactUs/SendMessage";

const Stack = createNativeStackNavigator();

export default function ContactStack() {
  return (
    <Stack.Navigator
      initialRouteName="ContactUs"
      screenOptions={{
        headerStyle: { backgroundColor: "purple", height: 80 },
        headerShown: false,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="SendMessage" component={SendMessage} />
    </Stack.Navigator>
  );
}
