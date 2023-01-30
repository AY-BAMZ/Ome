import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/global";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useAuthContext } from "../../api/auth/AuthContext";
import Loading from "../Loadings/Loading";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");

  const { handleResetPassword } = useAuthContext();
  const { isLoading } = useAuthContext();

  const resetPassword = () => {
    if (email === "") {
      setErrorMsg("email address field cannot be empty");
    } else {
      handleResetPassword({
        email,
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={styles.body}
      >
        <Text style={[globalStyles.textTwo, styles.title]}>
          Forgot Password
        </Text>
        <Text style={[globalStyles.textFour, styles.titleMessage]}>
          We’re excited to see you again!
        </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter yor email address"
          value={email}
          autoComplete="email"
          keyboardType="email"
          onChangeText={(email) => setEmail(email)}
          onSubmitEditing={() =>
            bathroomsRef.current && bathroomsRef.current.focus()
          }
          blurOnSubmit={false}
        />
      </TouchableWithoutFeedback>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => resetPassword()}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.buttonTwo}>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={globalStyles.buttonTextTwo}
          >
            Remember Password? Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  body: {
    marginHorizontal: 20,
  },
  title: {
    marginHorizontal: 40,
    textAlign: "center",
    color: "#79007B",
    marginVertical: 20,
  },
  titleMessage: {
    fontFamily: "outfit-regular",
    marginHorizontal: 40,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  buttons: {
    marginHorizontal: 20,
  },
});
