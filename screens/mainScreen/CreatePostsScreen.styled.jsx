import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },

  // Camera ___________________________
  camera: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
    paddingHorizontal: 20,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF22",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    // opacity: 0.12,
    marginBottom: 16,
  },
  cameraIcon: {
    color: "#FFFFFF",
    opacity: 1,
  },

  flipBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF22",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    // opacity: 0.12,
    marginBottom: 16,
  },

  previewWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "#BDBDBD",
    borderWidth: 1,
  },

  previewPhoto: {
    width: 50,
    height: 50,
  },
  downoladText: {
    alignSelf: "flex-start",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 98,
  },
  // location _________________________
  locationSection: {
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 16,

    // borderWidth: 1,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginBottom: 32,
    paddingBottom: 16,
  },

  inputIcon: {
    color: "#BDBDBD",
    marginRight: 8,
  },

  inputLocation: {
    width: "100%",
    fontSize: 16,
    color: "#212121",
  },

  absoluteFill: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
  },

  // Publication _____________________
  buttonsWrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  publicationBtn: {
    borderRadius: 100,
    padding: 16,
    width: "100%",
    // marginBottom: 120,
    // backgroundColor: "#151515",
  },

  publicationBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    // color: "#BDBDBD",
  },
  removeBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});

export default styles;
