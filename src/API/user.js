import axios from "./config";
import {validateResponseCode} from "../utils/utils";

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

// export const uploadImage = async () => {
// const state=store.getState();
// RNFetchBlob.fetch('POST','/user/displayImage', {
//   Authorization : state.auth.jwt,
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
