import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

import {webClientId} from "../constants/appConstants";

GoogleSignin.configure({webClientId});

export const attemptGoogleAuth = async () => {
  try {
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
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



export const registerWithEmail = async (email, password) => {
  try {
    const account = await auth()
      .createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');
    return account;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use')
      console.log('That email address is already in use!');

    if (error.code === 'auth/invalid-email')
      console.log('That email address is invalid!');

    console.log("Email register in error", error);
    return false;
  }
}

export const signInWithEmail = async (email, password) => {
  try {
    const account = await auth()
      .signInWithEmailAndPassword(email, password);
    console.log('User signed in!');
    return account;
  } catch (error) {
    console.log("Email sign in error", error);
    return false;
  }
}