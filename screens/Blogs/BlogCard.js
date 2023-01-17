import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function BlogCard(props) {
  return (
    <View style={styles.container}>
      <Image source={{ url: props.item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.author}>{props.item.author}</Text>
        <Text numberOfLines={2} style={styles.title}>{props.item.title}</Text>
        <Text style={styles.author}>{props.item.date_published}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 12,
  },
  image: {
    width: screenWidth * 0.33,
    height: screenHeight * 0.13,
    borderRadius: 8,
    marginRight: 10,
  },
  author: {
    fontFamily: "outfit-regular",
    color: "#777",
    fontSize: 14,
  },
  title: {
    fontFamily: "outfit-semibold",
    color: "#2B2A30",
    fontSize: 20,
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "space-around"
  }
});
