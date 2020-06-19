import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from "react-redux";

const Stack = createStackNavigator();
import * as actionCreators from '../store/actions';

import RouteNames from "./RouteNames";
import TrainerListing from "../screens/App/TrainerListing";
import Profile from "../screens/App/Profile";
import Packages from "../screens/App/Packages";
import Splash from "../screens/Auth/Splash";
import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/Signup";
import Listings from "../screens/Auth/Listings";
import SignInWithRegisteredEmail from "../screens/Auth/SignInWithRegisteredEmail";
import EmailVerification from "../screens/Auth/EmailVerification";
import TrainerSignupDetails from "../screens/Auth/TrainerSignupDetails";
import TrainerHomeScreen from "../screens/Auth/TrainerHomeScreen";
import {updateAxiosToken} from "../API";
import VideoCall from "../screens/App/VideoCall";


class App extends React.Component {
  //connect this component to redux
  state = {
    loading: true,
  }

  componentDidMount() {
    // this.props.resetAuth();
    const {authToken, setAuthenticated} = this.props;
    if (authToken) {
      updateAxiosToken(authToken);
      setAuthenticated(true);
    }
    this.setState({
      loading: false,
    })
  }

  render() {
    const {loading} = this.state;
    const {authenticated} = this.props;
    if (loading) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={RouteNames.Splash} component={Splash}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    } else if (authenticated) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={RouteNames.TrainerListing} component={TrainerListing} options={{title: 'Overview'}}/>
            <Stack.Screen name={RouteNames.Profile} component={Profile}/>
            <Stack.Screen name={RouteNames.Packages} component={Packages}/>
            <Stack.Screen name={RouteNames.VideoCall} component={VideoCall}/>
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
                        initialParams={{setSignedIn: this.setSignedIn}}
                        options={{title: 'Enter details'}}/>
          <Stack.Screen name="TrainerHomeScreen" component={TrainerHomeScreen} options={{title: ''}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  authToken: state.user.authToken,
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = (dispatch) => ({
  resetAuth: () => dispatch(actionCreators.resetAuth()),
  setAuthenticated: (value) => dispatch(actionCreators.setAuthenticated(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);