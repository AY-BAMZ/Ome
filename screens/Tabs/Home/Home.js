import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";

export default function Home() {
  return (
    <View style={globalStyles.page}>
      <Text style={globalStyles.pageText}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
