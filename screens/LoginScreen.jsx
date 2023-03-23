import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
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

const LoginScreen = ({ navigation }) => {
  const [keyboardStatus, setKeyboardStatus] = useState("");
  const [user, setUser] = useState(initialState);
  const { width } = useWindowDimensions();

  useEffect(() => {
    // console.log(width);
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
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/BG.jpg")}
          style={styles.bgImage}
        >
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
                  maxLength={20}
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
              <Pressable
                style={({ pressed }) => [
                  {
                    borderColor: pressed ? "#FF6C00" : "transparent",
                  },
                  styles.toLoginBtn,
                ]}
                onPress={() =>
                  navigation.navigate("Registration", { name: "Registration" })
                }
              >
                <Text style={styles.toRegisterBtnText}>
                  Don't have an account? Register
                </Text>
              </Pressable>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
