import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import {connect} from "react-redux";

// import background from '../../assets/bg.jpg';
import ProfileOverview from '../../src/components/Profile/ProfileOverview';
import RouteNames from "../../src/navigation/RouteNames";
import * as actionCreators from '../../src/store/actions';

const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
const defaultDP = 'https://media.istockphoto.com/photos/middle-aged-gym-coach-picture-id475467038';

class Profile extends Component {
  componentDidMount() {
    const {route, setUser} = this.props;
    const {userId} = route.params;
    setUser(userId);
  }

  enrollClicked = () => {
    const {navigation, route} = this.props;
    const {userId} = route.params;
    navigation.navigate(RouteNames.Packages, {
      userId
    });
  }

  renderContent = () => {
    const {route, users} = this.props;

    const {userId} = route.params;
    const user = users[userId];
    if (!user) return (
      <View style={styles.container}/>
    )
    let {name, userType, experience, rating, displayPictureUrl} = user;
    if (!displayPictureUrl) displayPictureUrl = defaultDP;

    return (
      <View style={styles.container}>
        <ProfileOverview
          name={name}
          dpUrl={displayPictureUrl}
          hits={{
            transformations: experience,
            rating: rating,
            followers: 0,
            following: 0
          }}
          description={"No description provided for this user"}
          profileType={userType}
          enrollCallback={this.enrollClicked}
        />
      </View>
    )
  }

  renderNavBar = () => (
    <View style={styles.navContainer}>
      {/*<Text style={styles.titleStyle}>Trainer Profile</Text>*/}
    </View>
  )

  render() {

    const {route, users} = this.props;

    const {userId} = route.params;
    const user = users[userId];

    let { displayPictureUrl} = user;
    if (!displayPictureUrl) displayPictureUrl = defaultDP;

    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={20}
          headerMaxHeight={400} //or screenheight *2/3
          extraScrollHeight={20}
          // navbarColor="white"
          // title={name}
          // alwaysShowTitle={false}
          // titleStyle={styles.titleStyle}
          backgroundImage={{uri:displayPictureUrl}}
          backgroundImageScale={1.2}
          // renderNavBar={this.renderNavBar}
          renderContent={this.renderContent}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
          scrollViewProps={{
            // onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            // onScrollEndDrag: () => console.log('onScrollEndDrag'),
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    // alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    // backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

const mapStateToProps = (state) => ({
  trainers: state.app.trainers,
  users: state.app.users
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (userId) => dispatch(actionCreators.setUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);