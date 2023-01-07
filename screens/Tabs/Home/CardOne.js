import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";
import { Ionicons } from "@expo/vector-icons";

export default function CardOne(props) {
  return (
    <View>
      <Image source={{ url: props.item.productimage }} style={styles.image} />
      <View style={styles.detailFlex}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[globalStyles.textFive, styles.title]}
        >
          {props.item.name}
        </Text>
        <Text style={globalStyles.textFour}>{props.item.price}/mo</Text>
      </View>
      <View style={styles.detailFlex}>
        <Text style={[globalStyles.textSix, styles.grey]}>
          {props.item.location}
        </Text>
        <Text style={[globalStyles.textsix, styles.grey]}>
          {props.item.housetype}
        </Text>
      </View>
      <View style={styles.detailFlex}>
        <Text style={[globalStyles.textSeven, styles.grey]}>
          {props.item.sellername}
        </Text>
        <Ionicons name="heart-outline" size={24} color="#565560" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 180,
    borderRadius: 12,
  },
  detailFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  grey: {
    color: "#565560",
    maxWidth: 150,
  },
  title: {
    maxWidth: 160,
  },
});
