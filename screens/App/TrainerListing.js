import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'

import TrainerThumb from '../../src/components/trainer/TrainerThumb';
import colors from "../../src/constants/colors";

class TrainerListing extends Component {
  state = {
    dataSource: {},
  };

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return {
        id: i,
        name: 'Khushbu Dutta Gupta',
        slots: 3,
        dpUrl: 'https://media.istockphoto.com/photos/middle-aged-gym-coach-picture-id475467038',
        experience: 5
      };
    });

    that.setState({
      dataSource: items,
    });
  }

  renderTrainerThumb = (trainer, index) => {
    const {name, slots, dpUrl, experience} = trainer;
    return <View style={index % 2 !== 0 && styles.itemSeparatorVertical}>
      <TrainerThumb
        name={name}
        slots={slots}
        dpUrl={dpUrl}
        experience={experience}
      />
    </View>
  }

  renderHorizontalSeparatorView = () => <View style={styles.itemSeparatorHorizontal}/>

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item, index}) => this.renderTrainerThumb(item, index)}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderHorizontalSeparatorView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  itemSeparatorHorizontal: {
    height: 1,
    width: "100%",
    backgroundColor: colors.lightGrey,
  },
  itemSeparatorVertical: {
    borderLeftWidth: 1,
    borderLeftColor: colors.lightGrey
  }
});

export default TrainerListing;