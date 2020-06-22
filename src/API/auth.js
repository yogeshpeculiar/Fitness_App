import axios from './config';
import {validateResponseCode} from "../utils/utils";

export const updateAxiosToken = (token) => {
  if (!token) {
    console.log("Clearing axios token", token);
    axios.defaults.headers.common['Authorization'] = '';
  } else {
    console.log("updating axios token", token);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
};

export const registerTrainer = async (email, password) => {
  try {
    let response = await axios.post('/register/trainer', {
      email,
      password
    });
    console.log(response)
    if (validateResponseCode(response.status)) {
      return response.data;
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const registerUser = async (email, password) => {
  try {
    let response = await axios.post('/register/user', {
      email,
      password
    });
    if (validateResponseCode(response.status)) {
      return response.data;
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const login = async (email, password) => {
  try {
    // username is email in this case
    let response = await axios.post('/login', {
      username: email,
      password: password
    });
    if (validateResponseCode(response.status)) {
      return response.data;
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const firebaseUserAuth = async (idToken, fcmToken) => {
  try {
    let response = await axios.post('/register/user/googleAuth', {
      idToken,
      fcmToken
    });
    if (validateResponseCode(response.status)) {
      return response.data;
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const firebaseTrainerAuth = async (idToken, fcmToken) => {
  try {
    let response = await axios.post('/register/trainer/googleAuth', {
      idToken,
      fcmToken
    });
    if (validateResponseCode(response.status)) {
      return response.data;
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}