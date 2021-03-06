import { combineReducers } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer } from "redux-persist";

import auth from "./auth.reducer";
import user from "./user.reducer";
import app from "./app.reducer";


const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage
};

const rootPersistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  blacklist: ["auth"],
};

const rootReducer = combineReducers({
  auth:persistReducer(authPersistConfig,auth),
  user,
  app,
});

export default persistReducer(rootPersistConfig, rootReducer);
