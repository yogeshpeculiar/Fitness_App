import { createStore } from "redux";
import rootReducer from "../reducers/index";
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2
   };
   const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer);

export default store;
export const persistor = persistStore(store);