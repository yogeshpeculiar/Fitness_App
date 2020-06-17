import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

import RouteNames from "./RouteNames";
import TrainerListing from "../../screens/App/TrainerListing";
import Profile from "../../screens/App/Profile";
import Packages from "../../screens/App/Packages";

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

class App extends React.Component {
  //connect this component to redux
  state = {
    loading: false,
    signedIn: true
  }

  render() {
    const {loading,signedIn} = this.state;
    if(loading){
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={RouteNames.Splash} component={()=><Text>Insert splash here</Text>}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }else if(signedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={RouteNames.TrainerListing} component={TrainerListing} options={{ title: 'Overview' }} />
            <Stack.Screen name={RouteNames.Profile} component={Profile} options={{gestureDirection:'horizontal'}}/>
            <Stack.Screen name={RouteNames.Packages} component={Packages} options={{gestureDirection:'horizontal'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    else return (
      null // here we return the Authentication screen navigators. u can mostly cut paste NavigationContainer from App.js and it should work
      );


  }
}


export default App;