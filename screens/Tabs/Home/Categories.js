import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useHouseContext } from "../../../context/HouseContext";
import CardOne from "./CardOne";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../../../styles/global";
import { useCategoryContext } from "../../../context/CategoryContext";

export default function Categories() {
  const { houses, setHouses } = useHouseContext();
  const { category, setCategory } = useCategoryContext();
  const houseCategories = [
    { key: 1, title: "All" },
    { key: 2, title: "Bungalow " },
    { key: 3, title: "Hostels" },
    { key: 4, title: "Skyscraper" },
    { key: 5, title: "Flats" },
    { key: 6, title: "Duplex" },
    {
      key: 7, title: "Self Contain",
    },
  ];

  const [activeTab, setActiveTab] = useState("All");
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.textFour, styles.label]}>Categories</Text>
      <FlatList
      style={[styles.tabs]}
        data={houseCategories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setActiveTab(item.title);
                setCategory(item.title);
              }}
              style={activeTab === item.title ? styles.activeTab : styles.inActiveTab}
            >
              <Text style={activeTab === item.title ? styles.activeText : styles.inActiveText}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <FlatList
        style={[styles.horizontalList]}
        data={houses}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card}>
              <CardOne item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  horizontalList: {
    paddingLeft: 20,
  },
  label: {
    marginHorizontal: 20,
    marginVertical: 12,
  },
  card: {
    marginRight: 12,
  },
  activeTab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderBottomColor: "#79007B",
    borderBottomWidth: 4,
  },
  tabs: {
    paddingHorizontal: 20,
    paddingRight: 40,
    marginBottom: 16,
    width: '100%',
  },
  inActiveTab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderBottomColor: "#00000000",
    borderBottomWidth: 4,
  },
  activeText: {
    fontFamily: "outfit-medium",
    color: "#79007B",
    fontSize: 18,
  },
  inActiveText: {
    fontFamily: "outfit-medium",
    color: "#777",
    fontSize: 18,
  }
});
