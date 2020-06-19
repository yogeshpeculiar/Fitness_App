import {userTypes} from "../../constants/appConstants";

export const authState = {
  authenticated: false
};

export const userState = {
  authToken: '',
  userType: userTypes.USER
};


export const appState = {
  trainers: [], // trainer listing
  users: { // detailed user info

  }
}

