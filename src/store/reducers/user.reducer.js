import {userState as initialState} from './initialState';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/utils";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH_TOKEN:
      return updateObject(state, action.payload);
    case actionTypes.SET_USER_TYPE:
      return updateObject(state, action.payload);
    case actionTypes.SET_INITIAL_LOGIN_OFF:
      return updateObject(state, action.payload);
    case actionTypes.GENERIC_USER_FIELD_SET:
      return updateObject(state, action.payload);
    case actionTypes.RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
