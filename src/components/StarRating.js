/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React from 'react';
import {View, StyleSheet} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';
import colors from "../constants/colors";
import {spacing} from "../constants/dimension";
import GenericText from "./GenericText";

const StarRating = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.padContainer}>
        <GenericText>{props.rating}</GenericText>
      </View>
      <View style={styles.padContainer}>
        <FontAwesome
          name="star"
          color={colors.goldenStar}
          size={14}
        />
      </View>
    </View>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

// StarRating.defaultProps = {
//   rating: 4.1
// }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  padContainer:{
    paddingRight:spacing.small_sm,
  }
});

export default StarRating;