import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
const customWidth = Dimensions.get('window').width;

export default function ProductPage({route, navigation}) {

    const handlePress = () => {
        navigation.goBack();
        // navigation.push("ProductPage")
      };

    const houseImages = [
        { key: 1, image: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131012/realhome/pexels-expect-best-323780_lssedw.jpg" },
        { key: 2, image: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131010/realhome/pexels-pixabay-164558_zbc2ys.jpg" },
        { key: 3, image: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131011/realhome/pexels-frans-van-heerden-1438832_pmqk7w.jpg" },
        { key: 4, image: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131010/realhome/pexels-graphicgumcom-1115804_kxxevb.jpg" },
        { key: 5, image: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131010/realhome/pexels-binyamin-mellish-106399_ggzc7z.jpg" },
        { key: 6, image: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131009/realhome/pexels-pixabay-276724_dy16bv.jpg" },
      ];

      const width = Dimensions.get('window').width;
  return (
    <View>
        <FlatList 
        data={houseImages}
        horizontal={true}
        renderItem={({item}) => (
            <Image style={styles.productImage} source={{ url: item.image }} />
  )}
        />
      <Text onPress={handlePress}>ProductPage</Text>
        <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={houseImages}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image style={styles.productImage} source={{ url: item.image }} />
                    </View>
                )}
            />
    </View>
  )
}

const styles = StyleSheet.create({
    productImage: {
        width: customWidth,
        height: 400,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
      },
})