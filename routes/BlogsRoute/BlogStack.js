import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Blogs from "../../screens/Blogs/Blogs";
import Header from "../../screens/DrawerTabs/Header";

const Stack = createNativeStackNavigator();

export default function BlogStack() {
  return (
    <Stack.Navigator
      initialRouteName="Blogs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Blogs" component={Blogs} 
      options={{
        header: () => <Header title={'Blogs'} />,
        headerShown: true
      }}/>
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}
