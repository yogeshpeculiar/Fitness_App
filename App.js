import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/Signup';
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
          <Stack.Screen name="SignIn" component={SignIn}  />
          <Stack.Screen name="Signup" component={SignUp}  />
        </Stack.Navigator>

    </NavigationContainer>
  );
}


