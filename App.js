import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import Listings from './screens/Listings';
import Login from './screens/Login';
import SignInWithRegisteredEmail from './screens/SignInWithRegisteredEmail';
import SignUp from './screens/Signup';
import StarterScreen from './screens/starterScreen';
import EmailVerification from './screens/EmailVerification';
import store from './src/Redux/Store';
import { persistor } from './src/Redux/Store/index';


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
            headerStyle: {

            },
          }}

          >
            <Stack.Screen name="StarterScreen" component={StarterScreen} options={{ title: '' }} />
            <Stack.Screen name="login" component={Login} options={{ title: '' }} />
            <Stack.Screen name="Signup" component={SignUp} options={{ title: 'Sign up' }} />
            <Stack.Screen name="Listings" component={Listings} />
            <Stack.Screen name="signInWithRegisteredEmail" component={SignInWithRegisteredEmail} options={{ title: 'Sign in' }} />
            <Stack.Screen name="EmailVerification" component={EmailVerification} options={{ title: '' }} />
          </Stack.Navigator>

        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


