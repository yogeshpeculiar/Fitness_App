import axios from './config';
import { validateResponseCode } from "../utils/utils";
import store from '../Redux/Store/index';
import image from '../../assets/bg.jpg';
export const updateAxiosToken = (token) => {
  if (!token) {
    console.log("Clearing axios token");
    axios.defaults.headers.common['Authorization'] = '';
  } else {
    console.log("updating axios token");
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
};

export const registerTrainer = async (email, password) => {
  try {
    let response = await axios.post('/register/Trainer', {
      email,
      password
    });
    if (validateResponseCode(response.status)) {
      console.log(response.data);
      console.log('jwt token'+response.data.jwt)
      store.dispatch({ type: 'ADD_JWT', jwt: response.data.jwt})
      updateAxiosToken(response.data.jwt)
      return true; //success
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
      console.log(response.data);

      return true; //success
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
      // username: 'test@gmail.com',
      // password: '123456'
    });


    if (validateResponseCode(response.status)) {
      console.log(response.data)
      // extract JWT from response and save it to storage, then pass token to updateAxiosToken

      store.dispatch({ type: 'ADD_JWT', jwt: response.data.token })
      updateAxiosToken(response.data.token)
      return true;
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}


// Experimental endpoint, to check if trainers are being created, a modification of this endpoint will later be used for Trainer listing
export const listTrainers = async () => {
  try {
    // username is email in this case
    let response = await axios.get('/trainers');
    if (validateResponseCode(response.status)) {
      // extract JWT from response and save it
      return response.data; // check this
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const addTrainerDetails = async (height,weight,experience,name) => {
  try {
     let response = await axios.put('/user', {
      height:height,
      weight:weight,
      experience:experience,
      name:name
    });
    if (validateResponseCode(response.status)) {
      console.log(response.data);

      return true; //success
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// export const uploadImage = async () => {
// const state=store.getState();
// RNFetchBlob.fetch('POST','/user/displayImage', {
//   Authorization : state.jwt,
//   'Content-Type' : 'multipart/form-data'
// },[
//   {name : 'image',
//   filename : 'photo.png',
//   data: RNFetchBlob.wrap(image)
// }
// ]).then((resp) => {
//   return true;

// }).catch((err) => {
//   console.log('img upload failed'+ err)
//   return false;
// })
// }