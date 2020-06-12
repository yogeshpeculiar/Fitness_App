import axios from 'axios';

import {rootURL} from '../constants/appConstants';

const instance = axios.create({
  baseURL: rootURL
});

instance.interceptors.request.use(function (config) {
  console.log("API Request", config);
  return config;
}, function (error) {
  console.log("API Request error", error);
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  console.log("API Response", response);
  return response;
}, function (error) {
  if(error.response &&  error.response.status === 401)
    console.log("Unauthorized");
  console.log("API Response error", error);
  return Promise.reject(error);
});

export default instance;
