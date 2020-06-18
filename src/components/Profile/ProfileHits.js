/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native'
import PropTypes from 'prop-types';

import strings from "../../constants/strings";
import {spacing} from "../../constants/dimension";
import Hits from '../Hits';
import colors from "../../constants/colors";

const ProfileHits = (props) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.hitContainer}>
        <Hits count={props.followers} property={strings.FOLLOWERS}/>
      </View>
      <View style={styles.separator}/>

      <View style={styles.hitContainer}>
        <Hits count={props.following} property={strings.FOLLOWING}/>
      </View>
      <View style={styles.separator}/>

      <View style={styles.hitContainer}>
        <Hits count={props.transformations} property={strings.TRANSFORMATIONS}/>
      </View>
      <View style={styles.separator}/>

      <View style={styles.hitContainer}>
        <Hits count={props.rating} property={strings.RATING}/>
      </View>
    </ScrollView>

  );
}

ProfileHits.propTypes = {
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  transformations: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center'
  },
  hitContainer: {
    marginLeft: spacing.medium_lg,
    marginRight: spacing.medium_lg
  },
  separator: {
    borderLeftWidth: 1,
    borderLeftColor: colors.lightGrey,
    height: '80%'
  }
});

export default ProfileHits;