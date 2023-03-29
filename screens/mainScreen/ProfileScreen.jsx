import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import styles from "./ProfileScreen.styled";
import AddButtonSvg from "../../components/AddButtonSvg";
import { Feather } from "@expo/vector-icons";

import PostCard from "../../components/PostCard";

initialState = [
  {
    photo: {
      photo: "",
      description: "Forest",
      location: "Ukraine",
      latitude: 37.4219972,
      longitude: -122.0840118,
      comments: 0,
      likes: 0,
    },
  },
];

const ProfileScreen = ({ navigation }) => {
  const [posts, setPosts] = useState(initialState);
  const goToMap = (latitude, longitude) =>
    navigation.navigate("Map", {
      latitude: latitude,
      longitude: longitude,
    });

  const goToComments = (photo) =>
    navigation.navigate("Comments", { photo: photo });
  return (
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
          <Pressable style={styles.logOutBtn}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </Pressable>
          <Text style={styles.title}>Natali Romanova</Text>
        </View>
        {posts.length !== 0 && (
          <FlatList
            style={styles.list}
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <PostCard
                photo={item.photo.photo}
                goToMap={() =>
                  goToMap(item.photo.latitude, item.photo.longitude)
                }
                goToComments={() => goToComments(item.photo.photo)}
              />
            )}
          />
        )}
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
