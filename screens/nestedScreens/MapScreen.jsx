import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const [location, setLocation] = useState(null);

  //  при монтажі компоненту записуємо route.params (фото) у масив posts
  useEffect(() => {
    if (route.params) {
      console.log("params", route.params);
      setLocation(route.params);
    }
    console.log("marker location --->", location);
    return;
  }, [route.params]);

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {location && (
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
