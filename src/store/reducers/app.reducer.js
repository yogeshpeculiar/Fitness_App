import {appState as initialState} from './initialState';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/utils";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TRAINERS:
      return updateObject(state, action.payload);
    case actionTypes.SET_USER:
      const {user} = action.payload;
      const users = {...state.users};
      users[user._id] = user;
      return updateObject(state, {users});
    default:
      return state;
  }
};

export default reducer;
