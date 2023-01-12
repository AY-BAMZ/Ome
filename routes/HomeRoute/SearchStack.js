import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductPage from "../../screens/Tabs/Home/ProductPage";
import Header from "../../screens/DrawerTabs/Header";
import Search from "../../screens/Tabs/Search/Search";

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerStyle: { backgroundColor: "purple",height: 80},headerShown: false, headerTintColor: "#fff"}}
      >
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            header: () => <Header title={'Search'} />,
            headerShown: true,
          }}
        />
        <Stack.Screen name="ProductPage" component={ProductPage} />
      </Stack.Navigator>
  );
}