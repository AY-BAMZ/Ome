import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";
import Hero from "./Hero";
import Categories from "./Categories";
import TopPicks from "./TopPicks";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Hero />
      <Categories />
      <TopPicks />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 60
  }
});
