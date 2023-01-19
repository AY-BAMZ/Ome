import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function BlogCard(props) {
  let date = props.item.date_published
   let dateShown = date.slice(0, 10);
   let timeShown = date.slice(11, 16);
  return (
    <View style={styles.container}>
      <Image source={{ url: props.item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <View>

        <Text ellipsizeMode="tail" style={styles.author}>{props.item.author}</Text>
        <Text ellipsizeMode="tail" numberOfLines={2}  style={styles.title}>{props.item.title}</Text>
        </View>
        <View style={styles.timeDetails}>

        <Text style={styles.time}>{dateShown}</Text>
        <Text style={styles.time}>{timeShown}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 12,
    paddingRight: 5,
  },
  image: {
    width: screenWidth * 0.33,
    height: screenHeight * 0.13,
    borderRadius: 8,
    marginRight: 10,
  },
  author: {
    fontFamily: "outfit-regular",
    color: "#79007B",
    fontSize: 14,
  },
  title: {
    fontFamily: "outfit-semibold",
    color: "#2B2A30",
    fontSize: 24,
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  timeDetails: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  time: {
    fontFamily: "outfit-regular",
    color: "#2B2A30",
    fontSize: 16,
    color: "#999"
  }
});
