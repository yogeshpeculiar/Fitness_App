/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import {connect} from "react-redux";

import {spacing} from "../../src/constants/dimension";
import * as actionCreators from "../../src/store/actions";

class SlotEditor extends Component {


  render() {
    const {route, users} = this.props;
    const {userId} = route.params;

    const {packages} = users[userId];


    return (
      <View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: spacing.medium_lg,
    marginRight:spacing.medium_lg
  }
});

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SlotEditor);