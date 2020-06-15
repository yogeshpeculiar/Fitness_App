import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import SignIn from './screens/SignIn';
import SignUp from './screens/Signup';
import Listings from './screens/Listings';
import Login from './screens/Login';
import StarterScreen from './screens/starterScreen';
import SignInWithRegisteredEmail from './screens/SignInWithRegisteredEmail';
// import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { persistor } from './src/Redux/Store/index';
 import store from './src/Redux/Store';

import { PersistGate } from 'redux-persist/lib/integration/react';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{
            
          },
          
          // headerTransparent: true
        }}
        
        >
           <Stack.Screen name="StarterScreen" component={StarterScreen} options={{ title: '' }}/>
          <Stack.Screen name="login" component={Login} options={{ title: '' }}/>
          <Stack.Screen name="Signup" component={SignUp}  />
          <Stack.Screen name="Listings" component={Listings}  />
          <Stack.Screen name="signInWithRegisteredEmail" component={SignInWithRegisteredEmail} options={{ title: 'Sign in' }}/>
        </Stack.Navigator>

    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}


