import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  wrapper: {
    // flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 32,
    paddingBottom: 0,
  },
  avatarWrapper: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    transform: [{ translateY: -60 }],
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
    width: "100%",
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

  toLoginBtn: {},

  toRegisterBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    marginBottom: 111,
  },
});

export default styles;
