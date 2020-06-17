import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native'

import PackageOverview from '../../src/components/Package/PackageOverview';
import {spacing} from "../../src/constants/dimension";

class Packages extends Component {
  state = {
    dataSource: {},
  };

  componentDidMount() {
    let items = Array.apply(null, Array(20)).map((v, i) => {
      return {
        id: i,
        title: '12 Weeks transformation package',
        duration: 12,
        price: 6000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien neque, auctor sit amet odio sit amet, euismod placerat augue. Aenean molestie est neque, quis commodo leo semper sit amet. Mauris nec neque et ex posuere viverra. Sed auctor faucibus nisi sit amet varius. Nullam lacinia, nulla sed pulvinar scelerisque, est libero pulvinar ligula, et auctor eros ipsum vel tortor. Vivamus massa neque, ullamcorper in purus at, placerat euismod est. Aliquam sodales neque et malesuada finibus. Aliquam libero tortor, venenatis sit amet dapibus ac, rhoncus in quam. Pellentesque pretium eros justo, nec accumsan dolor facilisis sed. Sed et augue ut lorem rhoncus ultrices. Duis condimentum aliquet finibus. Praesent iaculis justo ut elit feugiat ultricies. Nulla consequat diam elit, a auctor urna convallis gravida. Nulla facilisi. Sed porttitor pulvinar sapien sed venenatis.',
      };
    });

    this.setState({
      dataSource: items,
    });
  }

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
    return (
      <FlatList
        contentContainerStyle={styles.container}
        style={{flex: 1}}
        data={this.state.dataSource}
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

export default Packages;