import axios from './config';
import {validateResponseCode} from "../utils/utils";

export const makeCall = async (userId) => {
  try {
    let response = await axios.get(`/call/${userId}`);
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
