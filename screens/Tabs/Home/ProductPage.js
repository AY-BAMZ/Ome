import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../../styles/global";

const customWidth = Dimensions.get("window").width;

export default function ProductPage({ route, navigation }) {
  const handlePress = () => {
    navigation.goBack();
    // navigation.push("ProductPage")
  };

  const star = {
    ratings: {
      1: require("../../../assets/star1.png"),
      2: require("../../../assets/star2.png"),
      3: require("../../../assets/star3.png"),
      4: require("../../../assets/star4.png"),
      5: require("../../../assets/star5.png"),
    },
  };

  const rating = route.params.rating; 

  const houseImages = [
    {
      key: 1,
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131012/realhome/pexels-expect-best-323780_lssedw.jpg",
    },
    {
      key: 2,
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131010/realhome/pexels-pixabay-164558_zbc2ys.jpg",
    },
    {
      key: 3,
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131011/realhome/pexels-frans-van-heerden-1438832_pmqk7w.jpg",
    },
    {
      key: 4,
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131010/realhome/pexels-graphicgumcom-1115804_kxxevb.jpg",
    },
    {
      key: 5,
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131010/realhome/pexels-binyamin-mellish-106399_ggzc7z.jpg",
    },
    {
      key: 6,
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131009/realhome/pexels-pixabay-276724_dy16bv.jpg",
    },
  ];

  const [likeHome, setLikeHome] = useState(false);

  const width = Dimensions.get("window").width;
  return (
    <View>
      {/* <FlatList 
        data={houseImages}
        horizontal={true}
        renderItem={({item}) => (
            <Image style={styles.productImage} source={{ url: item.image }} />
  )}
        /> */}
      <TouchableOpacity onPress={handlePress} style={styles.back}>
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
      </TouchableOpacity>
      <Carousel
        loop
        width={width}
        height={400}
        bor
        autoPlay={true}
        data={houseImages}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Image style={styles.productImage} source={{ url: item.image }} />
          </View>
        )}
      />
      <View style={styles.container}>
        <View style={styles.relatedInfo}>
          <Text style={styles.productType}>{route.params.housetype}</Text>
          {likeHome === false ? (
            <Ionicons
              onPress={() => {
                setLikeHome(true); 
            // handleSavedHouses()
        }}
              name="heart-outline"
              size={24}
              color="black"
            />
          ) : (
            <Ionicons
              onPress={() => setLikeHome(false)}
              name="heart-sharp"
              size={24}
              color="red"
            />
          )}
        </View>
        <Text style={styles.productName}>{route.params.name}</Text>
        <View style={styles.location}>
          <Ionicons name="md-location-outline" size={16} color="#777" />
          <Text style={styles.text}>{route.params.location}</Text>
        </View>
        <Text style={styles.textTitle}>About Appartment</Text>
        <Text style={styles.text}>{route.params.about}</Text>
        <View style={styles.hr}></View>
        <View style={styles.details}>
          <Image source={star.ratings[rating]} />
          <Text style={styles.productPrice}>${route.params.price}</Text>
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.detailsFlex}>
          <View style={styles.sellerDetails}>
            <Image
              source={{ url: route.params.sellerimage }}
              style={styles.sellerImage}
            />
            <View>
              <Text style={styles.textTitle}>{route.params.sellername}</Text>
              <Text style={styles.text}>Agent</Text>
            </View>
          </View>
          <View style={styles.call}>
            <Ionicons name="ios-call" size={20} color="#79007B" />
          </View>
        </View>
      </View>
      <TouchableOpacity 
    //   onPress={() => handleAddToCart()} 
      style={[globalStyles.button, styles.button]}>
        <Text style={globalStyles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: customWidth,
    height: 400,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  back: {
    backgroundColor: "#ffffffaa",
    position: "absolute",
    width: 40,
    height: 40,
    top: 50,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    zIndex: 100,
  },
  container: {
    zIndex: 10,
    marginTop: -100,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    elevation: 7,
    shadowOffset: { width: 2, height: 7 },
    shadowColor: "#ccc",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  containerTwo: {
    zIndex: 10,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    elevation: 7,
    shadowOffset: { width: 2, height: 7 },
    shadowColor: "#ccc",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginVertical: 20,
  },
  productType: {
    fontFamily: "outfit-medium",
    color: "#79007B",
    fontSize: 16,
    marginBottom: 8,
  },
  productName: {
    fontSize: 24,
    fontFamily: "outfit-semibold",
    color: "#333",
  },
  location: {
    flexDirection: "row",
    marginVertical: 8,
    marginBottom: 16,
  },
  text: {
    color: "#777",
    fontSize: 16,
    fontFamily: "outfit-regular",
  },
  textTitle: {
    fontFamily: "outfit-medium",
    color: "#333",
    fontSize: 20,
    marginBottom: 8,
  },
  hr: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 16,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 32,
    color: "#2B2A30",
    fontFamily: "outfit-bold",
  },
  sellerImage: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    marginRight: 8,
  },
  sellerDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 20,
    height: 50,
    marginBottom: 16,
  },
  detailsFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  call: {
    width: 50,
    backgroundColor: "#79007B20",
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
