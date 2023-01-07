import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./HomeRoute/Tabs";
import Profile from "../screens/DrawerTabs/Profile";
import Settings from "../screens/DrawerTabs/Settings";
import CustomerSupport from "../screens/DrawerTabs/CustomerSupport";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Header from "../screens/DrawerTabs/Header";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  const screenOptions = {
    unmountOnBlur: false,
    headerShown: false,

    drawerStyle: {
      backgroundColor: "#fff",
      width: "60%",
      flex: 1,
      marginBottom: 10,
      marginRight: 5,
      //   borderRadius: 100,
      position: "absolute",
      //   paddingHorizontal: 20,
    },
    background: "#ffffff",
    drawerActiveTintColor: "#79007B",
    drawerInactiveTintColor: "#BBBBBB",
    // tabBarLabelStyle: {
    //   marginTop: -5,
    //   marginBottom: -15,
    // },
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator {...{ screenOptions }} initialRouteName="Home">
        <Drawer.Screen
          name="Dashboard"
          options={{
            drawerIcon: ({ color, size, focused }) =>
              focused ? (
                <MaterialIcons name="dashboard" size={size} color={color} />
              ) : (
                <MaterialCommunityIcons
                  name="view-dashboard-outline"
                  size={size}
                  color={color}
                />
              ),
            header: () => <Header />,
          }}
          component={Tabs}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            headerShown: false,
            drawerIcon: ({ color, size, focused }) =>
              focused ? (
                <FontAwesome name="user" size={size} color={color} />
              ) : (
                <FontAwesome name="user-o" size={size} color={color} />
              ),
          }}
          component={Profile}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerIcon: ({ color, size, focused }) =>
              focused ? (
                <Ionicons name="settings-sharp" size={size} color={color} />
              ) : (
                <Ionicons name="settings-outline" size={size} color={color} />
              ),
          }}
          component={Settings}
        />
        <Drawer.Screen
          name="CustomerSupport"
          options={{
            drawerIcon: ({ color, size, focused }) =>
              focused ? (
                <AntDesign name="customerservice" size={size} color={color} />
              ) : (
                <AntDesign name="customerservice" size={size} color={color} />
              ),
          }}
          component={CustomerSupport}
        />
        {/* <Drawer.Screen
          name="Log Out"
          options={{
            drawerIcon: ({ color, size, focused }) =>
              focused ? (
                <AntDesign name="customerservice" size={size} color={color} />
              ) : (
                <AntDesign name="customerservice" size={size} color={color} />
              ),
          }}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
