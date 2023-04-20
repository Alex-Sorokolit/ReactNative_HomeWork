import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AuthNavigation from "../screens/AuthNavigation";
import PostsStack from "../screens/PostsNavigator";
import { authStatus } from "../redux/auth/authOperations";

const useRoute = (isAuth) => {
  if (!isAuth) {
    return <AuthNavigation />;
  }
  return <PostsStack />;
};

const Main = () => {
  const state = useSelector((state) => state.auth);
  console.log("state: ", JSON.stringify(state, null, 2));

  const dispatch = useDispatch();

  // якщо false то користувач не залогінений
  const routing = useRoute(state.stateChange);
  useEffect(() => {
    // прокидуємо в портал authStatus
    dispatch(authStatus());
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {routing}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2ECEE",
    justifyContent: "center",
  },
});
