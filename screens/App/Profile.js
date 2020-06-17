import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import ReactNativeParallaxHeader from 'react-native-parallax-header';

import background from '../../assets/bg.jpg';
import ProfileInfo from '../../src/components/Profile/ProfileInfo';
import colors from "../../src/constants/colors";

const STATUS_BAR_HEIGHT =  0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;


class Profile extends Component {
  state = {
    dataSource: {
      name:'Sangeetha Thevar'
    },
  };

  componentDidMount() {

  }

  renderContent = () => {
    return (
      <View style={styles.container}>
        <ProfileInfo/>
      </View>
    )
  }

  renderNavBar = () => (
    <View style={styles.navContainer}>
      {/*<Text style={styles.titleStyle}>Trainer Profile</Text>*/}
    </View>
  )


  render() {
    const {name} = this.state.dataSource;
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={20}
          headerMaxHeight={400} //or screenheight *2/3
          extraScrollHeight={20}
          navbarColor="white"
          // title={name}
          // alwaysShowTitle={false}
          titleStyle={styles.titleStyle}
          backgroundImage={background}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
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




export default Profile;