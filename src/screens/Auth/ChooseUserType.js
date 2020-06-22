/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {connect} from "react-redux";

import {spacing} from "../../constants/dimension";
import * as actionCreators from "../../store/actions";
import RouteNames from "../../navigation/RouteNames";
import {userTypes} from "../../constants/appConstants";

class ChooseUserType extends Component {

  setUser = () => {
    const {setUserType, navigation} = this.props;
    setUserType(userTypes.USER);
    navigation.navigate(RouteNames.Login);
  }
  setTrainer = () => {
    const {setUserType, navigation} = this.props;
    setUserType(userTypes.TRAINER);
    navigation.navigate(RouteNames.Login);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.9} style={styles.darkButton} onPress={this.setUser}>
          <Text style={styles.lightText}>
            USER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lightButton} onPress={this.setTrainer}>
          <Text style={styles.darkText}>
            TRAINER
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  darkButton: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lightText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  darkText: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold'
  }
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setUserType: (userType) => dispatch(actionCreators.setUserType(userType))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseUserType);