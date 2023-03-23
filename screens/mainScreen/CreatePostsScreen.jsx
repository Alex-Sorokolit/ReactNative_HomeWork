import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <View style={styles.circle}>
          <MaterialIcons name="photo-camera" size={24} color="black" />
        </View>
      </View>
      <Text style={styles.downoladText}>Downolad photo</Text>

      <SimpleLineIcons name="location-pin" size={24} color="black" />
      <TextInput style={styles.inputLocation} mode="outlined" />
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#FF6C0099" : "#FF6C00",
          },
          styles.publicationBtn,
        ]}
        onPress={() => SignIn()}
      >
        <Text style={styles.registerBtnText}>Publication</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#FF6C0099" : "#FF6C00",
          },
          styles.removeBtn,
        ]}
        onPress={() => SignIn()}
      >
        <FontAwesome5 name="trash-alt" size={24} color="black" />
      </Pressable>

      <Text>CreatePostsScreen</Text>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingVertical: 16,
    backgroundColor: "#101010",
  },
  imageBox: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  downoladText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inputLocation: {
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  publicationBtn: {},
  removeBtn: {},
});
