import { StyleSheet, Text, Image, View } from "react-native";
import React, { useState, useEffect } from "react";
import CommentCard from "../../components/CommentCard";

const CommentsScreen = ({ route }) => {
  const [photo, setPhoto] = useState(null);
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
      <Text> coments page</Text>
      <View>
        {photo && <Image style={styles.image} source={{ uri: photo }} />}
      </View>
      <CommentCard />
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
    // marginBottom: 8,
  },
});
