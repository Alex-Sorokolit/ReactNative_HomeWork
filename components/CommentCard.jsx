import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const CommentCard = ({ comment, date }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.avatar}
        source={require("../assets/Comentator.jpg")}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.commentText}>{comment}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    gap: 16,
    marginBottom: 24,
  },
  avatar: {
    resizeMode: "cover",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textWrapper: {
    padding: 16,
    flex: 1,
    backgroundColor: "#F7F7F7",
    backgroundColor: "#909090",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  commentText: {
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 8,
  },
  date: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
  },
});
