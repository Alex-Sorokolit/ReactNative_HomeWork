import { StyleSheet } from "react-native";
import React from "react";
import DefaultScreenPosts from "../nestedScreens/DefaultScreenPosts";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const PostsScreen = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="DefaultScreen">
      <Stack.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        v
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({});

/* 
Щоб створити вкладені скріни потрібно використати createNativeStackNavigator

*/
