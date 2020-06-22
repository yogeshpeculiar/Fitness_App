import * as actionTypes from "./actionTypes";
import * as API from "../../API";
import {setAuthToken, genericUserFieldSetter} from './user.actions';
import {userTypes} from "../../constants/appConstants";

export const setAuthenticated = (authenticated) => ({
  type: actionTypes.SET_AUTHENTICATED,
  payload: {
    authenticated
  },
});

export const syncFirebaseAuth = (idToken, fcmToken) => {
  return async (dispatch, getState) => {
    try {
      let {userType} = await getState().user;
      let result;
      if (userType === userTypes.USER)
        result = await API.firebaseUserAuth(idToken, fcmToken);
      else
        result = await API.firebaseTrainerAuth(idToken, fcmToken);

      if (result) {
        // console.log(result);
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