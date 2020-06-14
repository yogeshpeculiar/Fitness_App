import axios from './config';
import {validateResponseCode} from "../utils/utils";
import { Alert } from 'react-native';

export const updateAxiosToken = (token) => {
  if (!token) {
    console.log("Clearing axios token");
    axios.defaults.headers.common['Authorization'] = '';
  } else {
    console.log("updating axios token");
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
};

export const registerTrainer = async (fields) => {
  try {
    const {name, email, password, experience, chargePerHour, phone, gender, bmi, weight, height, chest, biceps} = fields;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('experience', experience);
    formData.append('chargePerHour', chargePerHour);
    formData.append('phone', phone);
    formData.append('gender', gender);
    formData.append('bmi', bmi);
    formData.append('weight', weight);
    formData.append('height', height);
    formData.append('chest', chest);
    formData.append('biceps', biceps);

    let response = await axios.post('/register/trainer', formData);
    if (validateResponseCode(response.status)) {
      return true; //success
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const registerUser = async (fields) => {
  try {
    const {name, email, password, gender, phone} = fields;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('gender', gender);

    let response = await axios.post('/register/user', formData);
    if (validateResponseCode(response.status)) {
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
    console.log(JSON.stringify(email)+'---------'+password)
    Object.entries(email).map(([key,value])=>{
      email=value.toString()
    })
    Object.entries(password).map(([key,value])=>{
     password=value.toString()
    })

    let response = await axios.post('/login', {
      username: email,
      password: password
      // username: 'test@gmail.com',
      // password: '123456'
    });
    
  
    if (validateResponseCode(response.status)) {
      // extract JWT from response and save it to storage, then pass token to updateAxiosToken

      return true;
    } else
      return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}


// Experimental endpoint, to check if trainers are being created, a modification of this endpoint will later be used for trainer listing
export const listTrainers = async ()=>{
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