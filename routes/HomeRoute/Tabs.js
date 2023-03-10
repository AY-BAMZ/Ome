import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import Transactions from "../../screens/Tabs/Transactions/Transactions";
import Inbox from "../../screens/Tabs/Inbox/Inbox";
import BookMarks from "../../screens/Tabs/BookMarks/BookMarks";
import Header from "../../screens/DrawerTabs/Header";
import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator();

const Root = () => {
  const screenOptions = {
    unmountOnBlur: false,
    // headerShown: false,
    tabBarStyle: {
      backgroundColor: "#fff",
      height: 80,
      marginHorizontal: 10,
      marginBottom: 10,
      borderRadius: 100,
      position: "absolute",
      paddingHorizontal: 20,
    },
    background: "#ffffff00",
    tabBarActiveTintColor: "#79007B",
    tabBarInactiveTintColor: "#BBBBBB",
    tabBarLabelStyle: {
      marginTop: -5,
      marginBottom: -15,
    },
  };
  const sceneContainerStyle = {
    backgroundColor: "none",
  };

  return (
    <Tab.Navigator {...{ screenOptions, sceneContainerStyle }}>
      <Tab.Screen
        name="Home Stack"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
            headerShown: false
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Search Stack"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="search-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="search-outline" size={size} color={color} />
            ),
            headerShown: false
        }}
        component={SearchStack}
      />
      <Tab.Screen
        name="Transactions"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MaterialIcons name="compare-arrows" size={size} color={color} />
            ) : (
              <MaterialIcons name="compare-arrows" size={size} color={color} />
            ),
            header: () => <Header title={'Transactions'}/>,
        }}
        component={Transactions}
      />
      <Tab.Screen
        name="Inbox"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="chatbubbles" size={size} color={color} />
            ) : (
              <Ionicons name="chatbubbles-outline" size={size} color={color} />
            ),
            header: () => <Header title={'Inbox'}/>,
        }}
        component={Inbox}
      />
      <Tab.Screen
        name="BookMarks"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="ios-bookmark-sharp" size={size} color={color} />
            ) : (
              <Ionicons
                name="ios-bookmark-sharp"
                size={size}
                color={color}
              />
            ),
            header: () => <Header title={'BookMarks'}/>,
        }}
        component={BookMarks}
      />
    </Tab.Navigator>
  );
};

export default function Tabs() {
  return <Root />;
}

const styles = StyleSheet.create({});
