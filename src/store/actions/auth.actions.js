import * as actionTypes from "./actionTypes";

export const setjWT = (jwt) => ({
  type: actionTypes.SET_JWT,
  payload: {
    jwt
  },
});