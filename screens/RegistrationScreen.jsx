import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./RegistrationScreen.styled";

const RegistrationScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState("");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });
    // при розмонтуванні знімаються слухачі подій
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // setKeyboardStatus(false);
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.avatarWrapper}></View>
          <Text style={styles.title}>Registration</Text>

          <View
            style={{ ...styles.form, marginBottom: keyboardStatus ? 32 : 43 }}
          >
            <View style={styles.inputWrapper}>
              <Text style={styles.inputTitle}>Name</Text>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setKeyboardStatus(true);
                }}
                mode="outlined"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setKeyboardStatus(true);
                }}
                mode="outlined"
              />
            </View>

            <View>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onFocus={() => {
                  setKeyboardStatus(true);
                }}
                mode="outlined"
              />
            </View>
          </View>
          {!keyboardStatus && (
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#FF6C0099" : "#FF6C00",
                },
                styles.registerBtn,
              ]}
            >
              <Text style={styles.registerBtnText}>Sign In </Text>
            </Pressable>
          )}
          {!keyboardStatus && (
            <Pressable style={styles.toLoginBtn}>
              <Text style={styles.toLoginBtnText}>
                Already have an account? Log In
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
