import {showMessage, hideMessage} from "react-native-flash-message";
import SocketIOClient from "socket.io-client";
import {CHANNELS, rootURL} from "../constants/appConstants";
import {navigate} from '../navigation/RootNavigation';
import RouteNames from "../navigation/RouteNames";
import requestCameraAndAudioPermission from "./permission";

export const validateResponseCode = (code) => {
  return Math.floor(code / 100) === 2;
};

export const textSlicer = (text, length) => {
  if (!text) return "";
  if (length < 0) return text;
  if (text.length > length) {
    text = text.slice(0, length) + " ...";
  }
  return text;
};

export const getOSPath = (path) => {
  if (path.includes("content")) return path;
  return Platform.OS === "android" ? "file://" + path : path;
};

export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};

export const initialiseSocket = (authToken) => {
  if (authToken === '') {
    console.log("Cannot initialise a socket without auth token. exiting");
    return false;
  }
  const socket = SocketIOClient(rootURL);
  // socket.authToken = authToken/;
  socket.on('connect', function (data) {
    // console.log(socket)
    socket.emit(CHANNELS.STORE_CLIENT_INFO, {authToken});
  });
  socket.on(CHANNELS.INITIATE_VIDEO_CALL, data => {
    const {sessionID} = data;
    navigate(RouteNames.VideoCall, {
        AppID: 'de359ae21a884e08a18e38476b54ccea',
        ChannelName: sessionID
      }
    )
  })
  socket.on(CHANNELS.CONFIRM_VIDEO_CALL, data => {
    const {sessionID} = data;
    showMessage({
      message: "Receive call?",
      type: "info",
      description: "You are getting a call from a user",
      autoHide: false,
      onPress: async () => {
        const permissionGranted = await requestCameraAndAudioPermission();
        if (!permissionGranted) {
          console.log("Cant initiate video call without permission")
          return;
        }
        navigate(RouteNames.VideoCall, {
            AppID: 'de359ae21a884e08a18e38476b54ccea',
            ChannelName: sessionID
          }
        )
      }
    });
  })


  return socket;
}

