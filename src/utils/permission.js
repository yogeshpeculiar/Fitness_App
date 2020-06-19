/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {PermissionsAndroid} from "react-native";

export default async function requestCameraAndAudioPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);
    if (
      granted["android.permission.RECORD_AUDIO"] ===
      PermissionsAndroid.RESULTS.GRANTED &&
      granted["android.permission.CAMERA"] ===
      PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log("You can use the cameras & mic");
      return true;
    } else {
      console.log("Permission denied");
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
}
