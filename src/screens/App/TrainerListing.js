/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, FlatList, Image, StatusBar} from 'react-native'
import {connect} from "react-redux";

import TrainerThumb from '../../components/Trainer/TrainerThumb';
import colors from "../../constants/colors";
import RouteNames from "../../navigation/RouteNames";
import * as actionCreators from '../../store/actions';
// import {rootURL} from "../../constants/appConstants";
// import {initialiseSocket} from "../../utils/utils";

const defaultDP = 'https://media.istockphoto.com/photos/middle-aged-gym-coach-picture-id475467038';

class TrainerListing extends Component {
  async componentDidMount() {
    const {updateTrainers, authToken} = this.props;
    updateTrainers();
    // global.socket = await initialiseSocket(authToken);
    // console.log(global.socket)
  }

  openTrainer = (trainerId) => {
    const {navigation} = this.props;
    navigation.navigate(RouteNames.Profile, {
      userId: trainerId
    });
  }

  renderTrainerThumb = (trainer, index) => {
    let {name, totalSlots, usedSlots, experience, rating, displayPictureUrl} = trainer;
    if (!displayPictureUrl) displayPictureUrl = defaultDP

    return <TouchableOpacity
      activeOpacity={0.7}
      style={index % 2 !== 0 && styles.itemSeparatorVertical}
      onPress={() => this.openTrainer(trainer._id)}
    >
      <TrainerThumb
        name={name}
        slots={{
          remaining: totalSlots - usedSlots,
          used: usedSlots
        }}
        dpUrl={displayPictureUrl}
        experience={experience}
        rating={rating}
      />
    </TouchableOpacity>
  }

  renderHorizontalSeparatorView = () => <View style={styles.itemSeparatorHorizontal}/>

  render() {
    return (<>
        <StatusBar backgroundColor={colors.appBlue}/>
        <FlatList
          contentContainerStyle={styles.container}
          style={{flex: 1}}
          data={this.props.trainers}
          renderItem={({item, index}) => this.renderTrainerThumb(item, index)}
          numColumns={2}
          keyExtractor={(item, index) => item._id}
          ItemSeparatorComponent={this.renderHorizontalSeparatorView}
        />
      </>
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
    borderLeftWidth: 1,
    backgroundColor: colors.lightGrey,
  },
  itemSeparatorVertical: {
    borderLeftWidth: 1,
    borderLeftColor: colors.lightGrey
  }
});

const mapStateToProps = (state) => ({
  trainers: state.app.trainers,
  authToken: state.user.authToken,
});

const mapDispatchToProps = (dispatch) => ({
  updateTrainers: () => dispatch(actionCreators.updateTrainers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainerListing);