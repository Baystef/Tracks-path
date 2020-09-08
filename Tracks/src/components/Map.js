import React, { useState, useEffect, useRef, useContext } from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
  const _map = useRef(null);
  const { state: { currentLocation, locations } } = useContext(LocationContext)


  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  // useEffect(() => {
  //   if(_map.current) {
  //     _map.current.animateCamera(
  //       {
  //         center: {
  //           latitude: 50.1109221,
  //           longitude: 8.6821267
  //         },
  //         zoom: 15
  //       },
  //       5000
  //     );
  //   }
  // }, []);

  return (
    <MapView
      style={styles.map}
      // ref={_map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={25}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />

      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
