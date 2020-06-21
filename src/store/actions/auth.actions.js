import * as actionTypes from "./actionTypes";
import * as API from "../../API";
import {setAuthToken, genericUserFieldSetter} from './user.actions';

export const setAuthenticated = (authenticated) => ({
  type: actionTypes.SET_AUTHENTICATED,
  payload: {
    authenticated
  },
});

export const syncGoogleAuth = (idToken) => {
  return async (dispatch) => {
    try {
      let result = await API.googleAuth(idToken);
      if (result) {
        console.log(result);
        const {userId, authToken, userType} = result;
        dispatch(setAuthToken(authToken));
        dispatch(genericUserFieldSetter({
          userId,
          userType
        }));
        return true;
      }
      return false;
    } catch (error) {
      console.log("Google auth failed", error);
      return false;
    }
  };
};

export const resetAuth = () => ({
  type: actionTypes.RESET_AUTH,
});