import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from "react-redux";

const Stack = createStackNavigator();
import * as actionCreators from  '../store/actions';

import RouteNames from "./RouteNames";
import TrainerListing from "../../screens/App/TrainerListing";
import Profile from "../../screens/App/Profile";
import Packages from "../../screens/App/Packages";
import Splash from "../../screens/Auth/Splash";
import Login from "../../screens/Login";
import SignUp from "../../screens/Signup";
import Listings from "../../screens/Listings";
import SignInWithRegisteredEmail from "../../screens/SignInWithRegisteredEmail";
import EmailVerification from "../../screens/EmailVerification";
import TrainerSignupDetails from "../../screens/TrainerSignupDetails";
import TrainerHomeScreen from "../../screens/TrainerHomeScreen";
import {updateAxiosToken} from "../API/methods";

class App extends React.Component {
  //connect this component to redux
  state = {
    loading: true,
    signedIn: false
  }

  componentDidMount() {
    const {authToken} = this.props;
    if (authToken) {
      this.setState({
        loading: false,
        signedIn: true
      })
      updateAxiosToken(authToken);
    } else {
      this.setState({
        loading: false,
        signedIn: false
      })
    }
  }

  render() {
    const {loading, signedIn} = this.state;
    if (loading) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={RouteNames.Splash} component={Splash}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    } else if (signedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={RouteNames.TrainerListing} component={TrainerListing} options={{title: 'Overview'}}/>
            <Stack.Screen name={RouteNames.Profile} component={Profile}/>
            <Stack.Screen name={RouteNames.Packages} component={Packages}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {},
        }}
        >
          <Stack.Screen name="login" component={Login} options={{title: ''}}/>
          <Stack.Screen name="Signup" component={SignUp} options={{title: 'Sign up'}}/>
          <Stack.Screen name="Listings" component={Listings}/>
          <Stack.Screen name="signInWithRegisteredEmail" component={SignInWithRegisteredEmail}
                        options={{title: 'Sign in'}}/>
          <Stack.Screen name="EmailVerification" component={EmailVerification} options={{title: ''}}/>
          <Stack.Screen name="TrainerSignupDetails" component={TrainerSignupDetails}
                        options={{title: 'Enter details'}}/>
          <Stack.Screen name="TrainerHomeScreen" component={TrainerHomeScreen} options={{title: ''}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  authToken: state.auth.authToken,
});

const mapDispatchToProps = (dispatch) => ({
  resetAuth: ()=> dispatch(actionCreators.resetAuth())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);