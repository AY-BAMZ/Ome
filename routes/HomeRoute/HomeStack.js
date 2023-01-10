import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Tabs/Home/Home";
import ProductPage from "../../screens/Tabs/Home/ProductPage";
import Header from "../../screens/DrawerTabs/Header";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerStyle: { backgroundColor: "purple",height: 80},headerShown: false, headerTintColor: "#fff"}}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Header title={'Home'} />,
            headerShown: true
          }}
        />
        <Stack.Screen name="ProductPage" component={ProductPage} />
      </Stack.Navigator>
  );
}