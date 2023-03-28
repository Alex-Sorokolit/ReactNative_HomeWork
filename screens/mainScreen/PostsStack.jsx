import { StyleSheet } from "react-native";
import React from "react";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigation from "../MainNavigator";

const Stack = createNativeStackNavigator();

const PostsStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MainNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PostsStack;

const styles = StyleSheet.create({});

/* 
Щоб створити вкладені скріни потрібно використати createNativeStackNavigator

*/

//  <Stack.Navigator initialRouteName="DefaultScreen">
//    <Stack.Screen
//      name="DefaultScreen"
//      component={DefaultScreenPosts}
//      options={{ headerShown: false }}
//    />
//    <Stack.Screen
//      name="Comments"
//      component={CommentsScreen}
//      // options={{ headerShown: false }}
//    />
//    <Stack.Screen
//      name="Map"
//      component={MapScreen}
//      options={{ headerShown: false }}
//    />
//  </Stack.Navigator>;
