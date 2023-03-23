import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  TextInput,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import styles from "./RegistrationScreen.styled";
import AddButtonSvg from "../../components/AddButtonSvg";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [keyboardStatus, setKeyboardStatus] = useState("");
  const [candidat, setCandidat] = useState(initialState);
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
    console.log(candidat);
    setCandidat(initialState);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/BG.jpg")}
          style={styles.bgImage}
        >
          <View style={styles.wrapper}>
            <View style={styles.avatar}>
              <View style={styles.imgWrapper}>
                <Image
                  style={styles.img}
                  source={require("../../assets/Avatar.jpg")}
                />
              </View>
              <Pressable style={styles.addBtn}>
                <AddButtonSvg />
              </Pressable>
            </View>
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
                  value={candidat.name}
                  onChangeText={(value) =>
                    setCandidat((prevState) => ({ ...prevState, name: value }))
                  }
                  maxLength={10}
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
                  value={candidat.email}
                  onChangeText={(value) =>
                    setCandidat((prevState) => ({ ...prevState, email: value }))
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
                  value={candidat.password}
                  onChangeText={(value) =>
                    setCandidat((prevState) => ({
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
                <Text style={styles.registerBtnText}>Sign In </Text>
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
                onPress={() => navigation.navigate("Login", { name: "Login" })}
              >
                <Text style={styles.toLoginBtnText}>
                  Already have an account? Log In
                </Text>
              </Pressable>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
