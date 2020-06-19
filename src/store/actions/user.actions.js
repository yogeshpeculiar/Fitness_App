import * as actionTypes from "./actionTypes";
import {updateAxiosToken} from "../../API";

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

export const resetUser =() => ({
  type: actionTypes.RESET_USER,
});