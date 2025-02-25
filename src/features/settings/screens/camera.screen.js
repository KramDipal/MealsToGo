import React, { useRef, useState, useEffect, useContext } from "react";
// import { Camera } from "expo-camera";
// import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { CameraView, useCameraPermissions, CameraType } from 'expo-camera';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import styled from "styled-components/native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
// import { View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
// const ProfileCamera = styled(Camera)`
//   width: 100%;
//   height: 100%;
// `;

export const CameraScreen = ({navigation}) => {

    // const [facing, setFacing] = useState<CameraType>('back');
    // const [facing, setFacing] = useState('back' as CameraType);
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null);
    const { user } = useContext(AuthenticationContext);

    if (!permission) {
      // Camera permissions are still loading.
      return <View />;
    }
  
    if (!permission.granted) {
      // Camera permissions are not granted yet.
      return (
        <View style={styles.container}>
          <Text style={styles.message}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }
  
    // function toggleCameraFacing() {
    //   setFacing(current => (current === 'back' ? 'front' : 'back'));
    // }

    function toggleCameraFacing() {
        setFacing(current => {
          const newFacing = current === 'back' ? 'front' : 'back';
          console.log('Switching to:', newFacing);
          return newFacing;
        });
      }
  

      async function takePicture() {
        if (cameraRef.current) {
          try {
            const photo = await cameraRef.current.takePictureAsync();
            console.log('Photo captured:', photo);
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
            navigation.goBack();
            // photo.uri contains the local file path, e.g., "file:///path/to/photo.jpg"
          } catch (error) {
            console.error('Error taking picture:', error);
          }
        }
      }

    return (
      <View style={styles.container}>
        <CameraView 
            ref={cameraRef} 
            style={styles.camera} 
            facing={facing}
        >
        {/* <CameraView style={styles.camera} facing="front"> */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    );



//   const [hasPermission, setHasPermission] = useState(null);
//   const cameraRef = useRef();

//   const snap = async () => {
//     if (cameraRef) {
//       const photo = await cameraRef.current.takePictureAsync();
//       console.log(photo);
//     }
//   };

//   useEffect(() => {
//     (async () => {
//     //   const { status } = await Camera.requestPermissionsAsync();
//     const { status } = await Camera.getCameraPermissionsAsync();     
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <TouchableOpacity onPress={snap}>
//       <ProfileCamera
//         ref={(camera) => (cameraRef.current = camera)}
//         type={Camera.Constants.Type.front}
//       />
//     </TouchableOpacity>
//   );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });