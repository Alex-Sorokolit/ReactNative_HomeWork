import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const CommentCard = () => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.avatar}
        source={require("../assets/Comentator.jpg")}
      />
      <View style={styles.textWrapper}>
        <Text>CommentCard</Text>
        <Text>Date</Text>
      </View>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
  },
  avatar: {
    // borderWidth: 1,
    // borderColor: "#000",
    resizeMode: "cover",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textWrapper: {
    flex: 1,
    backgroundColor: "#212121",
    height: 200,
  },
});
