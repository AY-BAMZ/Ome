import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../../styles/global";
import { useContactContext } from "../../api/Contact/ContactContext";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Loading from "../Loadings/Loading";

export default function ContactUs() {
  const [errorMessage, setErrorMessage] = useState("")
  const { message, setMessage } = useContactContext();
  const { isLoading, setIsLoading } = useContactContext();
  const { successful, setSuccessful } = useContactContext();
  const { handleContact } = useContactContext();

  const updateInputVal = (val, prop) => {
    if (prop === "message") {
      setMessage(val);
    }
  };

  
  const createContactRequest = () => {
    if (message === "") {
      setErrorMessage("message cannot be empty")
    } else{
      handleContact({
        message
      })
    }
  }

  const contactSuccessful = () =>
  Alert.alert('Sent', 'Your request have been sent successfully', [
    {
      text: 'Thanks',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'View', onPress: () => console.log('OK Pressed')},
  ]);

  if (isLoading) {
    return <Loading />;
  }

  if (successful) {
    contactSuccessful()
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Text style={[globalStyles.textTwo, styles.title]}>Contact Us</Text>

          <TextInput
            placeholder="Enter your message"
            style={globalStyles.textarea}
            multiline={true}
            value={message}
            onChangeText={(val) => updateInputVal(val, "message")}
            onSubmitEditing={() => createContactRequest()}
          />
        </TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={() => createContactRequest()}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 20,
  },
  title: {
    marginHorizontal: 40,
    textAlign: "center",
    color: "#79007B",
    marginVertical: 20,
  },
});
