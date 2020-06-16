import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'

import TrainerThumb from '../../src/components/trainer/TrainerThumb';

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

  renderTrainerThumb = (trainer) => {
    const {name, slots, dpUrl, experience} = trainer;
    return <TrainerThumb
      name={name}
      slots={slots}
      dpUrl={dpUrl}
      experience={experience}
    />
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => this.renderTrainerThumb(item)}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    justifyContent: 'center'
    // alignItems: "center"
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
});

export default TrainerListing;