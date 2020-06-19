import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';

import store from './src/store/configureStore';
import { persistor } from './src/store/configureStore';
import Splash from "./src/screens/Auth/Splash";
import AppStack from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      {/*insert loading later*/}
      <PersistGate persistor={persistor}>
          <AppStack/>
      </PersistGate>
    </Provider>
  );
}


