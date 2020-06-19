import * as actionTypes from "./actionTypes";
import {updateAxiosToken} from "../../API";
import SocketIOClient from 'socket.io-client';
import {CHANNELS, rootURL} from "../../constants/appConstants";

export const setAuthTokenAction = (authToken) => ({
  type: actionTypes.SET_AUTH_TOKEN,
  payload: {
    authToken
  },
});

export const setAuthToken = (authToken) => {
  return async (dispatch) => {
    dispatch(setAuthTokenAction(authToken));
    updateAxiosToken(authToken);
  };
};

export const resetUser = () => ({
  type: actionTypes.RESET_USER,
});