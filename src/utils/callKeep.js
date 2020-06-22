import RNCallKeep from "react-native-callkeep";
import {navigate} from "../navigation/RootNavigation";
import RouteNames from "../navigation/RouteNames";
import messaging from "@react-native-firebase/messaging";
import requestCameraAndAudioPermission from "./permission";

export const randomuuid = 'randomuuid'

export const callKeepConfig = {
  ios: {
    appName: 'My app name',
  },
  android: {
    alertTitle: 'Permissions required',
    alertDescription: 'This application needs to access your phone accounts',
    cancelButton: 'Cancel',
    okButton: 'ok',
  }
};

export const displayIncomingCall = async (sessionId, agoraAppId, userName='user' ) => {
  RNCallKeep.displayIncomingCall(randomuuid, 'user', userName);
  global.sessionId = sessionId;
  global.agoraAppId = agoraAppId;
  // global.userName = userName;
}

const didReceiveStartCallAction = (data) => {
  let {handle, callUUID, name} = data;
  console.log(data, 'receive')
// Get this event after the system decides you can start a call
// You can now start a call from within your app
};

const onAnswerCallAction = async (data) => {
  let {callUUID} = data;
  RNCallKeep.setCurrentCallActive(randomuuid);
  RNCallKeep.backToForeground();
  console.log(data, 'answer')
  const permissionGranted = await requestCameraAndAudioPermission();
  if (!permissionGranted) return;
  navigate(RouteNames.VideoCall, {
    AppID: global.agoraAppId,
    ChannelName: global.sessionId
  });
};

const onEndCallAction = (data) => {
  RNCallKeep.endCall(randomuuid);
};

RNCallKeep.addEventListener('didReceiveStartCallAction', didReceiveStartCallAction);
RNCallKeep.addEventListener('answerCall', onAnswerCallAction);
RNCallKeep.addEventListener('endCall', onEndCallAction);