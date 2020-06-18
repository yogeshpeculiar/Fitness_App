import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from "./reducers/root.reducer";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
};

const rootPersistReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default store =  createStore(rootPersistReducer,undefined, composeEnhancers(applyMiddleware(...middleware)));
export const persistor = persistStore(store);