/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import {connect} from "react-redux";

import PackageOverview from '../../components/Package/PackageOverview';
import {spacing} from "../../constants/dimension";
import * as actionCreators from "../../store/actions";

class Packages extends Component {
  packageSelected = () => {
    console.log("package selected");
  }

  renderPlan = (plan) => {
    const {title, duration, price, description} = plan;
    return (
      <View style={styles.packageContainer}>
        <PackageOverview
          title={title}
          duration={duration}
          price={price}
          description={description}
          callback={this.packageSelected}
        />
      </View>
    )
  }

  render() {
    const {route, users} = this.props;
    const {userId} = route.params;

    const {packages} = users[userId];


    return (
      <FlatList
        contentContainerStyle={styles.container}
        style={{flex: 1}}
        data={packages}
        renderItem={({item}) => this.renderPlan(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: spacing.medium_lg,
    marginRight:spacing.medium_lg
  },
  packageContainer: {
    marginTop: spacing.medium,
    marginBottom: spacing.medium
  }
});

const mapStateToProps = (state) => ({
  users: state.app.users
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Packages);