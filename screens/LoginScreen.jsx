import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import styles from "./LoginScreen.styled";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState("");
  const [user, setUser] = useState(initialState);
  const { width } = useWindowDimensions();

  useEffect(() => {
    console.log(width);
  }, [width]);

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

  const SignIn = () => {
    console.log(user);
    setUser(initialState);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // setKeyboardStatus(false);
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Log In</Text>

          <View
            style={{ ...styles.form, marginBottom: keyboardStatus ? 32 : 43 }}
          >
            <View style={styles.inputWrapper}>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setKeyboardStatus(true);
                }}
                value={user.email}
                onChangeText={(value) =>
                  setUser((prevState) => ({ ...prevState, email: value }))
                }
                maxLength={10}
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
                value={user.password}
                onChangeText={(value) =>
                  setUser((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
                maxLength={10}
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
              onPress={() => SignIn()}
            >
              <Text style={styles.registerBtnText}>Log In </Text>
            </Pressable>
          )}
          {!keyboardStatus && (
            <Pressable style={styles.toLoginBtn}>
              <Text style={styles.toRegisterBtnText}>
                Don't have an account? Register
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
