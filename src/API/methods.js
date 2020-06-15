import axios from './config';
import {validateResponseCode} from "../utils/utils";
import { Alert } from 'react-native';
import store from '../Redux/Store/index';
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
    let response = await axios.post('/register/trainer', {
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
    console.log(JSON.stringify(email)+'---------'+password)
    Object.entries(email).map(([key,value])=>{
      email=value.toString()
    })
    Object.entries(password).map(([key,value])=>{
     password=value.toString()
    })

    let response = await axios.post('/login', {
      // username: email,
      // password: password
      username: 'test@gmail.com',
      password: '123456'
    });
    
  
    if (validateResponseCode(response.status)) {
      console.log(response.data)
      // extract JWT from response and save it to storage, then pass token to updateAxiosToken
      
      store.dispatch({type:'ADD_JWT',jwt:response.data.token})
      updateAxiosToken(response.data.token)
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