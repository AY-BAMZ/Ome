import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Blogs from "../../screens/Blogs/Blogs";

const Stack = createNativeStackNavigator();

export default function BlogStack() {
  return (
    <Stack.Navigator
      initialRouteName="Blogs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Blogs" component={Blogs} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}
