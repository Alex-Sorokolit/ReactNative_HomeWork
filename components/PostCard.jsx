import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const PostCard = ({ photo, goToComments, goToMap }) => {
  return (
    <View style={styles.card}>
      {photo !== "" && photo ? (
        <Image style={styles.image} source={{ uri: photo }} />
      ) : (
        <View style={{ ...styles.image, backgroundColor: "#BDBDBD" }}></View>
      )}
      <Text style={styles.description}>Description</Text>
      <View style={styles.btnWrapper}>
        <Pressable style={styles.button} onPress={goToComments}>
          <Fontisto name="comment" size={24} color="#BDBDBD" />
          <Text style={styles.commentText}>15</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={goToMap}>
          <SimpleLineIcons
            name="location-pin"
            size={24}
            color="#BDBDBD"
            style={styles.icon}
          />
          <Text style={styles.locationText}>Location description</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    // borderColor: "#000",
    marginBottom: 32,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
    // borderWidth: 1,
    // borderColor: "#000",
  },
  description: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 8,
  },
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "#000",
  },
  button: {
    display: "flex",
    flexDirection: "row",
  },
  icon: { marginRight: 8 },

  commentText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginLeft: 8,
  },
  locationText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
    marginLeft: 8,
  },
});
