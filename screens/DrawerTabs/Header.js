import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={globalStyles.headerIconBox}>
        <Ionicons name="menu" size={28} color="#2B2A30" />
      </View>
      <View style={globalStyles.headerIconBox}>
        <Ionicons name="notifications-outline" size={28} color="#2B2A30" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff00",
    marginTop: 20,
    position: 'absolute'
  },
});
