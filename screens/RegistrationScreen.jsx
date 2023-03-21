import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./RegistrationScreen.styled";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Registration</Text>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputTitle}>Name</Text>
            <TextInput style={styles.input} mode="outlined" />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput style={styles.input} mode="outlined" />
          </View>
          <View>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              mode="outlined"
            />
          </View>
        </View>
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
        <Pressable style={styles.toLoginBtn}>
          <Text style={styles.toLoginBtnText}>
            Already have an account? Log In
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegistrationScreen;
