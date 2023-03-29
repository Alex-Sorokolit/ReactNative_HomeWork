import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import React, { useState, useEffect } from "react";
import PostCard from "../../components/PostCard";

// route приймає всі дані які прийшли із навігації
const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  //  при монтажі компоненту записуємо route.params (фото) у масив posts
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
    console.log("posts --->", posts);
    return;
  }, [route.params]);

  const goToMap = (latitude, longitude) =>
    navigation.navigate("Map", {
      latitude: latitude,
      longitude: longitude,
    });

  const goToComments = (photo) =>
    navigation.navigate("Comments", { photo: photo });
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.avatar}
          source={require("../../assets/Avatar.jpg")}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      {posts.length !== 0 && (
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <PostCard
              photo={item.photo.photo}
              goToMap={() => goToMap(item.photo.latitude, item.photo.longitude)}
              goToComments={() => goToComments(item.photo.photo)}
            />
          )}
        />
      )}
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userName: {
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
  },
});
