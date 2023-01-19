import {
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
import { Modal } from "react-native-paper";
import SuccessModal from "./SuccessModal";
import Loading from "../Loadings/Loading";

export default function ContactUs() {
  const { message, setMessage } = useContactContext();
  const { isLoading, setIsLoading } = useContactContext();
  const { successful, setSuccessful } = useContactContext();
  const { handleContact } = useContactContext();
  const [modalVisible, setModalVisible] = useState(false);

  const updateInputVal = (val, prop) => {
    if (prop === "message") {
      setMessage(val);
    }
  };

  const handleSetModal = () => {
    if (successful === true) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };
  useEffect(() => {
    return handleSetModal();
  }, []);

  if (isLoading) {
    return <Loading />;
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
            onSubmitEditing={() => handleContact()}
          />
        </TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={() => {
            handleContact();
            handleSetModal();
          }}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
        <Modal visible={modalVisible}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <SuccessModal setModalVisible={setModalVisible} modalVisible={modalVisible}/>
          </TouchableWithoutFeedback>
        </Modal>
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
