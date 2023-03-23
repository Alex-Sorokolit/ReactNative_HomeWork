import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./screens/AuthNavigation";
import MainNavigation from "./screens/MainNavigator";

const useRoute = (isAuth) => {
  if (!isAuth) {
    return <AuthNavigation />;
  }
  return <MainNavigation />;
};

export default function App() {
  const routing = useRoute({});
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {routing}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2ECEE",
    justifyContent: "center",
  },
});
