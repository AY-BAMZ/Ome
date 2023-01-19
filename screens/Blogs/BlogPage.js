import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function BlogPage({ route, navigation }) {
  const handlePress = () => {
    navigation.goBack();
    // navigation.push("ProductPage")
  };
  let date = route.params.date_published
   let dateShown = date.slice(0, 10);
   let timeShown = date.slice(11, 16);

//    let  time= new Date().toLocaleString();
//    let devicedate  = new Date().getDate();
//    let month = new Date().getMonth() + 1;
//       let year = new Date().getFullYear();
//    console.log('devicedate', devicedate  + "-" + time)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.back}>
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
      </TouchableOpacity>
      <View style={styles.page}>

      <Text style={styles.title}>{route.params.title}</Text>
      <Image style={styles.blogImage} source={{ url: route.params.image }} />
      <View style={styles.timeDetails}>

        <Text style={styles.time}>{dateShown}</Text>
        <Text style={styles.time}>{timeShown}</Text>
        </View>
      <Text style={styles.content}>{route.params.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  page: {
    marginTop: 100,
  },
  back: {
    backgroundColor: "#ffffffaa",
    position: "absolute",
    width: 40,
    height: 40,
    top: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    zIndex: 100,
  },
  title: {
    fontFamily: "outfit-semibold",
    color: "#333",
    fontSize: 40,
    marginBottom: 10,
  },
  content: {
    fontFamily: "outfit-medium",
    color: "#777",
    fontSize: 16,
    marginBottom: 40,
  },
  blogImage: {
    width: "100%",
    marginBottom: 20,
    height: 320,
    borderRadius: 16
  },
  timeDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  time: {
    fontFamily: "outfit-semibold",
    color: "#2B2A30",
    fontSize: 14,
    color: "#999"
  }
});
