import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  FlatList,
  View,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import CommentCard from "../../components/CommentCard";
import { AntDesign } from "@expo/vector-icons";

const initialComments = [
  {
    comment:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 июня, 2020 | 08:40",
  },
  {
    comment:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 июня, 2020 | 09:14",
  },
  {
    comment: "Thank you! That was very helpful!",
    date: "09 июня, 2020 | 09:20",
  },
];

const CommentsScreen = ({ route }) => {
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    if (route.params) {
      setPhoto(route.params.photo);
      console.log("set params:", route.params.photo);
    }
    // console.log("Coments --->", photo.photo);
    return;
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View>
        {photo && <Image style={styles.image} source={{ uri: photo }} />}
      </View>

      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CommentCard comment={item.comment} date={item.date} />
        )}
      />

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.commentInput}
          // onFocus={() => {
          //   setKeyboardStatus(true);
          // }}
          placeholder="Comment..."
          value={newComment}
          onChangeText={(value) => setNewComment(value)}
          mode="outlined"
        />

        <Pressable style={styles.commentBtn}>
          <AntDesign name="arrowup" size={24} color="#FFFFFF" />
        </Pressable>
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    marginBottom: 8,
  },
  commentInput: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    height: 50,
    padding: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  commentBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#FF6C00",
    width: 34,
    height: 34,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    position: "relative",
    marginBottom: 16,
  },
});
