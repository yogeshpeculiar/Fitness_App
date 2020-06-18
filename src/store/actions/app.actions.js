import * as actionTypes from "./actionTypes";
import * as API from "../../API";

export const setTrainers = (trainers) => ({
  type: actionTypes.SET_TRAINERS,
  payload: {
    trainers
  },
});

export const updateTrainers = () => {
  return async (dispatch, getState) => {
    try {
      let {trainers} = await API.listTrainers();
      if(trainers){
        dispatch(setTrainers(trainers));
      }
    } catch (error) {
      console.log("Trainer update failed", error);
    }
  };
};

export const setUserAction = (user) => ({
  type: actionTypes.SET_USER,
  payload: {
    user
  }
});

export const setUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let {user} = await API.getUserInfo(userId);
      if(user){
        dispatch(setUserAction(user));
      }
    } catch (error) {
      console.log("User update failed", error);
    }
  };
};

