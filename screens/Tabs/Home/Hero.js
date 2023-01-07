import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


// const screenHeight = Dimensions.get("window").height;

export default function Hero() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        style={styles.container}
        source={require("../../../assets/bg.png")}
      >
        <Text style={styles.heroText}>Find and own the perfect home</Text>
        <View style={styles.inputArea}>
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
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 280,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  heroText: {
    color: "#fff",
    fontFamily: "outfit-bold",
    fontSize: 36,
    maxWidth: 300,
    textAlign: "center",
    alignSelf: "center",
  },
  inputArea: {
    minWidth: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 44,
    paddingHorizontal: 2,
    borderRadius: 50,
    marginVertical: 12,
    paddingLeft: 10,
    marginTop: 20
  },
});
