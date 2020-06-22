import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from "react-redux";
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

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
import {attemptGoogleAuth, registerWithEmail, signInWithEmail, updateAxiosToken} from "../API";
import VideoCall from "../screens/App/VideoCall";
import VideoTester from "../screens/App/VideoTester";
import {navigationRef} from './RootNavigation';
import {videoTestMode} from "../constants/appConstants";

class App extends React.Component {
  state = {
    loading: true,
    videoTestMode // set this to true to enter video testing mode,
  }

  async componentDidMount() {
    // this.props.resetUser();this.props.resetAuth()
    const {setAuthenticated} = this.props;
    setAuthenticated(false); // TODO: Remove this line and fix auth blacklisting
    this.authSubscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
    this.syncing= false;
  }

  componentWillUnmount() {
    // this.authSubscriber.remove ??
  }

  onAuthStateChanged = async (user) => {
    const {authToken, setAuthenticated, syncFirebaseAuth} = this.props;
    console.log("Auth state changed", user);
    let fcmToken = await messaging().getToken();
    console.log('fcm', fcmToken)
    if (user) {
      if (!!authToken) {
        console.log('authToken present, going home');
        updateAxiosToken(authToken);
        setAuthenticated(true);
      } else {
        console.log("No auth token, getting one");
        let fcmToken = await messaging().getToken();
        let idToken = await auth().currentUser.getIdToken(true);
        let authSuccess;
        if (this.syncing == false) {
          this.syncing = true; // avoid multiple api calls
          authSuccess = await syncFirebaseAuth(idToken, fcmToken);
        }
        this.syncing = false;

        if (authSuccess)
          setAuthenticated(true);
        else {
          //TODO:Handle this case
        }
      }
    } else {
      setAuthenticated(false);
    }
    if (this.state.loading)
      this.setState({loading: false});
  }

  render() {
    if (this.state.videoTestMode)
      return (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name={RouteNames.VideoTester} component={VideoTester}/>
            <Stack.Screen name={RouteNames.VideoCall} component={VideoCall}/>
          </Stack.Navigator>
        </NavigationContainer>
      )

    const {loading} = this.state;
    const {authenticated} = this.props;
    if (loading) {
      return (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name={RouteNames.Splash} component={Splash}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    } else if (authenticated) {
      return (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen name={RouteNames.TrainerListing} component={TrainerListing} options={{title: 'Overview'}}/>
            <Stack.Screen name={RouteNames.Profile} component={Profile}/>
            <Stack.Screen name={RouteNames.Packages} component={Packages}/>
            <Stack.Screen name={RouteNames.VideoCall} component={VideoCall}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else return (
      <NavigationContainer ref={navigationRef}>
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
  resetUser: () => dispatch(actionCreators.resetUser()),
  setAuthenticated: (value) => dispatch(actionCreators.setAuthenticated(value)),
  syncFirebaseAuth: (idToken, fcmToken) => dispatch(actionCreators.syncFirebaseAuth(idToken, fcmToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);