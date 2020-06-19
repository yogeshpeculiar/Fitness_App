import * as actionTypes from "./actionTypes";

export const setAuthenticated = (authenticated) => ({
  type: actionTypes.SET_AUTHENTICATED,
  payload: {
    authenticated
  },
});

export const resetAuth =() => ({
  type: actionTypes.RESET_AUTH,
});