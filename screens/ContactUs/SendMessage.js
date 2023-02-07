import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";
import { useContactContext } from "../../api/Contact/ContactContext";

export default function SendMessage({navigation}) {

  const { successful, setSuccessful } = useContactContext();

  return (
    <View style={styles.container}>
      <View style={styles.successMessage}>
        <Text style={globalStyles.textTwo}>Congrats </Text>
        <Text style={globalStyles.textTwo}>
          Your request have been submitted successful, and you will receive an
          ail from our customer care personnel with 3 business days.{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {setModalVisible(!modalVisible); setSuccessful(!successful)}}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => {
          //   handleContact();
          //   handleSetModal();
          // }}
          style={globalStyles.buttonThree}
        >
          <Text style={globalStyles.buttonTextThree}>Go to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // zIndex: 100,
    justifyContent: "center",
    alignContent: "center",
  },
  successMessage: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    flex: 1,
    // zIndex: 100,
    justifyContent: "center",
    alignContent: "center",
  },
});
