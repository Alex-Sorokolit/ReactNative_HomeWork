import React, { useEffect } from "react";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import PostsScreen from "./nestedScreens/PostsScreen";
import CreatePostsScreen from "./mainScreen/CreatePostsScreen";
import ProfileScreen from "./mainScreen/ProfileScreen";

const MainTab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#FF6B00",
        tabBarStyle: { paddingHorizontal: 70, paddingTop: 4, paddingBottom: 4 },
        tabBarItemStyle: {
          borderRadius: 20,
          height: 40,
          width: 70,
        },
      }}
    >
      <MainTab.Screen
        name="Posts"
        tabBarColor="#FF6B00"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          headerRight: ({ focused, size, color }) => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 10 }}
            />
          ),
          headerTitleAlign: "center",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 500,
          },
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="plus" size={size} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainNavigation;
