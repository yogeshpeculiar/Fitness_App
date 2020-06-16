import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';

import RoundedDP from '../RoundedDP';
import GenericText from "../GenericText";
import {coachedPeople} from "../../constants/strings";
import SlotPreview from "./SlotPreview";
import {spacing} from "../../constants/dimension";

const trainerThumb = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.roundedDPContainer}>
        <RoundedDP/>
      </View>
      <View style={styles.nameContainer}>
        <GenericText>{props.name}</GenericText>
      </View>
      <View style={styles.experienceContainer}>
        <GenericText
          type={'light'}
        >{coachedPeople(props.experience)}</GenericText>
      </View>
      <View style={styles.slotPreviewContainer}>
        <SlotPreview/>
      </View>
    </View>
  );
}

trainerThumb.propTypes = {
  name: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  dpUrl: PropTypes.string.isRequired,
  slots: PropTypes.number.isRequired
};

trainerThumb.defaultProps = { //testing, remove this later
  name: Math.random() > 0.5 ? 'Kalyan Battersetty' : 'Khushbu Dutta Gupta',
  experience: 3,
  dpUrl: '322',
  slots: 2
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center"
  },
  roundedDPContainer:{
    marginBottom:spacing.medium_sm
  },
  nameContainer:{
    paddingTop:spacing.small,
    paddingBottom:spacing.small
  },
  experienceContainer:{
    paddingBottom:spacing.small
  },
  slotPreviewContainer:{
    flex:1,
    width:'100%',
  }


});

export default trainerThumb;