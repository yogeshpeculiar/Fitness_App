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
export const listTrainers = async () => {
  try {
    let response = await axios.get('/trainers');
    if (validateResponseCode(response.status)) {
      return response.data;
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const addTrainerDetails = async (height, weight, experience, name) => {
  try {
    let response = await axios.put('/user', {
      height: height,
      weight: weight,
      experience: experience,
      name: name
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

export const uploadImage = async () => {
const state=store.getState();
RNFetchBlob.fetch('POST','/user/displayImage', {
  Authorization : state.auth.jwt,
  'Content-Type' : 'multipart/form-data'
},[
  {name : 'image',
  filename : 'photo.png',
  data: RNFetchBlob.wrap(image)
}
]).then((resp) => {
  return true;

}).catch((err) => {
  console.log('img upload failed'+ err)
  return false;
})
}


export const getUserInfo = async (userId) => {
  try {
    let response = await axios.get(`/user/${userId}`);
    if (validateResponseCode(response.status)) {
      return response.data;
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
