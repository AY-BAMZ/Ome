import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { useHouseContext } from "../../../context/HouseContext";
import CardTwo from "./CardTwo";

export default function Search({navigation}) {  
  
  const { houses, setHouses } = useHouseContext();

  return (
    <View style={styles.container}>
      <View style={[globalStyles.inputArea, styles.search]}>
        <Ionicons name="search-outline" size={24} color="#ddd" />
        <TextInput
          placeholder="Enter an address, city, state or landmark"
          style={globalStyles.input}
          returnKeyType="search"
        />
        <View style={globalStyles.filter}>
          <Ionicons name="filter" size={20} color="#ddd" />
        </View>
      </View>
      <Text style={[globalStyles.textThree, styles.resultTitle]}>Result</Text>
      <FlatList
        style={[styles.horizontalList]}
        data={houses}
        horizontal={false}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("ProductPage", item)} style={styles.card}>
              <CardTwo  item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  search: {
    marginHorizontal: 20,
  },
  horizontalList: {
    marginHorizontal: 10,
  },
  resultTitle: {
    marginHorizontal: 20,
    marginVertical: 10,
  }
});
