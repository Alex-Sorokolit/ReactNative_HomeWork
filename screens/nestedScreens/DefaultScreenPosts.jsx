import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import React, { useState, useEffect } from "react";

const Item = ({ photo }) => (
  <View style={styles.item}>
    <Image style={styles.photo} source={{ uri: photo }} />
  </View>
);

// route приймає всі дані які прийшли із навігації
const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  //  при монтажі компоненту записуємо route.params (фото) у масив posts
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
    console.log("posts --->", posts);
    return;
  }, [route.params]);

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
      {posts && (
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Item photo={item.photo} />}
        />
      )}
      <Button
        title="go to map"
        onPress={() => navigation.navigate("Map")}
      ></Button>
      <Button
        title="go to comments"
        onPress={() => navigation.navigate("Comments")}
      ></Button>
    </View>
  );
};

export default DefaultScreenPosts;

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
  item: {
    backgroundColor: "#ddd",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "center",
  },
  photo: {
    borderColor: "#999",
    borderWidth: 1,
    flex: 1,
    resizeMode: "cover",
    width: 100,
    height: 100,
  },
});
