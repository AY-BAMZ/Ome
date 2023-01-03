import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const getFonts = () =>
  Font.loadAsync({
    "outfit-thin": require("./assets/font/Outfit-Thin.ttf"),
    "outfit-extralight": require("./assets/font/Outfit-ExtraLight.ttf"),
    "outfit-light": require("./assets/font/Outfit-Light.ttf"),
    "outfit-regular": require("./assets/font/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/font/Outfit-Medium.ttf"),
    "outfit-semibold": require("./assets/font/Outfit-SemiBold.ttf"),
    "outfit-bold": require("./assets/font/Outfit-Bold.ttf"),
    "outfit-extrabold": require("./assets/font/Outfit-ExtraBold.ttf"),
    "outfit-black": require("./assets/font/Outfit-Black.ttf"),
  });


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
