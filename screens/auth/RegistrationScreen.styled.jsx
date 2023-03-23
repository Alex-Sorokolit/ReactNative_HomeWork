import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    justifyContent: "flex-end",
  },
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },
  avatar: {
    position: "relative",
    // borderColor: "red",
    // borderWidth: 1,
    transform: [{ translateY: -60 }],
    marginBottom: -30,
  },
  imgWrapper: {
    width: 120,
    height: 120,
  },
  img: {
    borderRadius: 16,
    // borderColor: "#555",
    // borderWidth: 1,
  },
  addBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
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

  form: {
    width: "100%",
    marginBottom: 43,
  },

  inputWrapper: {
    marginBottom: 16,
  },

  inputTitle: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    padding: 16,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  registerBtn: {
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
    width: "100%",
  },
  registerBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },

  toLoginBtn: {
    borderBottomWidth: 2,
    marginBottom: 45,
  },

  toLoginBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default styles;
