import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./screens/AuthNavigation";
import PostsStack from "./screens/PostsNavigator";
import { useState } from "react";
// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
// firebase
import app from "./firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app);

const useRoute = (isAuth) => {
  if (!isAuth) {
    return <AuthNavigation />;
  }
  return <PostsStack />;
};

export default function App() {
  const [user, setUser] = useState(null);
  // якщо false то користувач не залогінений
  const routing = useRoute(user);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      console.log("no authirized");
    }
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          {routing}
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2ECEE",
    justifyContent: "center",
  },
});
