import styles from "./CreatePostsScreen.styled";
import { TextInput, Pressable, Text, View, Image, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";

import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState(null);
  const [isDisabled, setDisabled] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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
    setPhoto(photo.uri);
    console.log("camera ------>", photo.uri);
  };

  const sendPhoto = () => {
    console.log("send pressed");
    console.log("navigation", navigation);
    // викликаємо навігацію на сторінку з постами і передаємо об'єкт із даними
    navigation.navigate("DefaultScreen1", { photo: photo });
    setCamera(null);
  };

  return (
    <View style={styles.container}>
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
            <Image source={{ uri: photo }} style={styles.previewPhoto} />
          </View>
        )}

        <Pressable style={styles.circle} onPress={resumePrew}></Pressable>

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
      <Text style={styles.downoladText}>Downolad photo</Text>

      <View style={styles.locationSection}>
        <SimpleLineIcons
          name="location-pin"
          size={24}
          color="#BDBDBD"
          style={styles.locationIcon}
        />
        <TextInput
          style={styles.inputLocation}
          mode="outlined"
          placeholder="Location"
        />
      </View>
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
        onPress={() => {
          console.log("delete pressed");
        }}
      >
        <FontAwesome5 name="trash-alt" size={24} color="#BDBDBD" />
      </Pressable>
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
