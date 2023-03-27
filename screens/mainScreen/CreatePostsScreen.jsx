import styles from "./CreatePostsScreen.styled";
import { TextInput, Pressable, Text, View, Image, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";

import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const initialState = {
  photo: null,
  description: "",
  location: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [state, setState] = useState(initialState);
  const [isDisabled, setDisabled] = useState(true);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { photo } = state;

  useEffect(() => {
    if (
      state.photo !== "" &&
      state.description !== "" &&
      state.location !== ""
    ) {
      setDisabled(false);
    }
  }, [state]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
    console.log(Camera);
    console.log("flip Camera");
  }

  const resumePrew = async () => {
    const prew = await camera.resumePreview();
    console.log("prew pressed");
  };
  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("latitude: ---->", location.coords.latitude);
    console.log("longitude: ---->", location.coords.longitude);
    setState((prevState) => ({ ...prevState, photo: photo.uri }));
    console.log("camera ------>", photo.uri);
  };

  const sendPhoto = () => {
    console.log("send pressed");
    console.log("navigation", navigation);
    console.log(state);
    // викликаємо навігацію на сторінку з постами і передаємо об'єкт із даними
    navigation.navigate("DefaultScreen", { photo: state });
    setCamera(null);
    setState(initialState);
    setDisabled(true);
  };

  const removePost = () => {
    setState(initialState);
    navigation.navigate("Posts", { name: "Posts" });
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <View style={styles.cameraCoverWrapper}>
          <Image source={{ uri: photo }} style={styles.cameraCover} />
          <Pressable
            style={styles.circle}
            onPress={(prevState) => setState({ ...prevState, photo: null })}
          >
            <FontAwesome name="repeat" size={24} color="#FFF" />
          </Pressable>
        </View>
      ) : (
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            setCamera(ref);
          }}
          onCameraReady={() => {
            console.log("camera ready");
          }}
          onMountError={() => {
            console.log("camera Error");
          }}
        >
          {photo && (
            <View style={styles.previewWrapper}>
              <Image
                source={{ uri: photo.photo }}
                style={styles.previewPhoto}
              />
            </View>
          )}
          <Pressable style={styles.circle} onPress={takePhoto}>
            <MaterialIcons
              name="photo-camera"
              size={24}
              color="#fff"
              style={styles.cameraIcon}
            />
          </Pressable>
          <Pressable style={styles.flipBtn} onPress={toggleCameraType}>
            <Entypo name="retweet" size={24} color="#fff" />
          </Pressable>
        </Camera>
      )}
      {photo ? (
        <Text style={styles.downoladText}>Edit photo</Text>
      ) : (
        <Text style={styles.downoladText}>Upload photo</Text>
      )}

      <View style={styles.locationSection}>
        <MaterialIcons
          name="edit"
          size={24}
          color="#BDBDBD"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.inputLocation}
          mode="outlined"
          placeholder="Description"
          value={state.description}
          onChangeText={(value) =>
            setState((prevState) => ({
              ...prevState,
              description: value,
            }))
          }
        />
      </View>

      <View style={styles.locationSection}>
        <SimpleLineIcons
          name="location-pin"
          size={24}
          color="#BDBDBD"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.inputLocation}
          mode="outlined"
          placeholder="Location"
          value={state.location}
          onChangeText={(value) =>
            setState((prevState) => ({
              ...prevState,
              location: value,
            }))
          }
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <Pressable
          style={({ pressed }) => [
            styles.publicationBtn,
            { opacity: pressed ? 0.8 : 1 },
            {
              backgroundColor: isDisabled ? "#E8E8E8" : "#FF6C00",
            },
          ]}
          onPress={() => sendPhoto()}
          disabled={isDisabled}
        >
          <Text
            style={[
              { color: isDisabled ? "#BDBDBD" : "#ffffff" },
              styles.publicationBtnText,
            ]}
          >
            Publication
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#FF6C0099" : "#FF6C00",
            },
            styles.removeBtn,
          ]}
          onPress={removePost}
        >
          <FontAwesome5 name="trash-alt" size={24} color="#BDBDBD" />
        </Pressable>
      </View>
    </View>
  );
};

export default CreatePostsScreen;

/* Щоб передати дані між сторінками (компонентами) потрібно використовувати navigation

В першому компоненті ми дістаємо із пропсів navigation. 
const CreatePostsScreen = ({ navigation }) => {}
Потім створюємо функцію в якій викликаємо навігацію на другу сторінку і передаємо дані
  const sendPhoto = () => {
    navigation.navigate("Posts", { photo: photo });
  };

В другому компонентів отримуємо в пропсах дані route
const PostsScreen = ({ route }) => {}
і записуємо їх у стейт
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
    console.log("posts --->", posts);
    return;
  }, [route.params]);
*/
