import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  wrapper: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 32,
  },

  form: {
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
    // backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
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

  toLoginBtn: {},

  toLoginBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    marginBottom: 45,
  },
});

export default styles;
