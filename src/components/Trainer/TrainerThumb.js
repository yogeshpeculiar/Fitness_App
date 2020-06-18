/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React from 'react';
import {View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';

import RoundedDP from '../RoundedDP';
import GenericText from "../GenericText";
import {coachedPeople} from "../../constants/strings";
import SlotPreview from "./SlotPreview";
import StarRating from "../StarRating";

import {spacing} from "../../constants/dimension";

const trainerThumb = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.roundedDPContainer}>
        <RoundedDP
          url={props.dpUrl}
        />
      </View>
      <View style={styles.nameContainer}>
        <GenericText>{props.name}</GenericText>
      </View>
      <View style={styles.experienceContainer}>
        <View style={styles.starContainer}>
          <StarRating
            rating={props.rating}
          />
        </View>
        <GenericText
          type={'light'}
        >{coachedPeople(props.experience)}</GenericText>
      </View>
      <View style={styles.slotPreviewContainer}>
        <SlotPreview
          remainingSlots={props.slots.remaining}
          usedSlots={props.slots.used}
        />
      </View>
    </View>
  );
}

trainerThumb.propTypes = {
  name: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  dpUrl: PropTypes.string.isRequired,
  slots: PropTypes.shape({
    used: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
  }),
  rating: PropTypes.number.isRequired
};

// trainerThumb.defaultProps = { //testing, remove this later
//   name: Math.random() > 0.5 ? 'Kalyan Battersetty' : 'Khushbu Dutta Gupta',
//   experience: 123,
//   dpUrl: Math.random() > 0.5 ? 'https://i.ya-webdesign.com/images/people-standing-png-4.png' : 'https://www.pngitem.com/pimgs/m/28-288789_transparent-png-person-standing-standing-png-download.png',
//   slots: 2,
//   rating: 4.3
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center"
  },
  roundedDPContainer: {
    marginBottom: spacing.small
  },
  nameContainer: {
    paddingTop: spacing.small,
    paddingBottom: spacing.small
  },
  experienceContainer: {
    paddingBottom: spacing.small,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  starContainer: {
    marginRight: spacing.small
  },
  slotPreviewContainer: {
    flex: 1,
    width: '100%',
  }


});

export default trainerThumb;