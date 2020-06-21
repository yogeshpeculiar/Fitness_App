import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {webClientId} from "../constants/appConstants";

GoogleSignin.configure({webClientId});

async function onGoogleButtonPress() {
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    } else if (error.code === statusCodes.IN_PROGRESS) {
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    } else {
    }
    console.log("Google sign in error", error);
    return false;
  }
}