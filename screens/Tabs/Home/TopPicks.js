import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useHouseContext } from "../../../context/HouseContext";
import CardOne from "./CardOne";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../../../styles/global";
import { useCategoryContext } from "../../../context/CategoryContext";

export default function TopPicks() {
  const { houses, setHouses } = useHouseContext();

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.textFour, styles.label]}>Top Picks</Text>
      
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
  container: {
    marginVertical: 40,
  },
  horizontalList: {
    paddingLeft: 20,
    paddingRight: 20
  },
  label: {
    marginHorizontal: 20,
    marginVertical: 12,
  },
  card: {
    marginRight: 20,
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
