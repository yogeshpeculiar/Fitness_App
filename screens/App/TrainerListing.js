import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'

import TrainerThumb from '../../src/components/Trainer/TrainerThumb';
import colors from "../../src/constants/colors";

class TrainerListing extends Component {
  state = {
    dataSource: {},
  };

  componentDidMount() {
    let items = Array.apply(null, Array(20)).map((v, i) => {
      return {
        id: i,
        name: Math.random() > 0.5 ? 'Kalyan Battersetty' : 'Khushbu Dutta Gupta',
        slots:{
          used: 3,
          remaining:2,
        },
        dpUrl: Math.random() > 0.5 ? 'https://media.istockphoto.com/photos/middle-aged-gym-coach-picture-id475467038' : 'https://www.pngitem.com/pimgs/m/28-288789_transparent-png-person-standing-standing-png-download.png',
        experience: 123,
        rating:4.3
      };
    });

    this.setState({
      dataSource: items,
    });
  }

  renderTrainerThumb = (trainer, index) => {
    const {name, slots, dpUrl, experience, rating} = trainer;
    return <View style={index % 2 !== 0 && styles.itemSeparatorVertical}>
      <TrainerThumb
        name={name}
        slots={slots}
        dpUrl={dpUrl}
        experience={experience}
        rating={rating}
      />
    </View>
  }

  renderHorizontalSeparatorView = () => <View style={styles.itemSeparatorHorizontal}/>

  render() {
    return (
        <FlatList
          contentContainerStyle={styles.container}
          style={{flex:1}}
          data={this.state.dataSource}
          renderItem={({item, index}) => this.renderTrainerThumb(item, index)}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderHorizontalSeparatorView}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center",
  },
  itemSeparatorHorizontal: {
    height: 1,
    borderLeftWidth:1,
    backgroundColor: colors.lightGrey,
  },
  itemSeparatorVertical: {
    borderLeftWidth: 1,
    borderLeftColor: colors.lightGrey
  }
});

export default TrainerListing;