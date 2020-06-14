import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import SignIn from './screens/SignIn';
import SignUp from './screens/Signup';
import Listings from './screens/Listings';
import Login from './screens/Login';
import SignInWithRegisteredEmail from './screens/SignInWithRegisteredEmail';
// import './node_modules/bootstrap/dist/css/bootstrap.min.css';

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
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{
            
          },
          
          headerTransparent: true
        }}
        
        >
          <Stack.Screen name="login" component={Login} options={{ title: '' }}/>
          <Stack.Screen name="Signup" component={SignUp}  />
          <Stack.Screen name="Listings" component={Listings}  />
          <Stack.Screen name="signInWithRegisteredEmail" component={SignInWithRegisteredEmail} options={{ title: '' }}/>
        </Stack.Navigator>

    </NavigationContainer>
  );
}


