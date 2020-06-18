import * as actionTypes from "./actionTypes";
import {updateAxiosToken} from "../../API/methods";

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

export const resetAuth =() => ({
  type: actionTypes.RESET_AUTH,
});