import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  wrapper: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },
  avatar: {
    position: "relative",
    transform: [{ translateY: -60 }],
    marginBottom: -30,
  },
  imgWrapper: {
    width: 120,
    height: 120,
  },
  img: {
    borderRadius: 16,
  },
  addBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  logOutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 7,
  },
});

export default styles;
