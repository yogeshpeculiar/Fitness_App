/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React from 'react';
import {View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';

import RoundedDP from '../RoundedDP';
import GenericText from "../GenericText";

import {spacing} from "../../constants/dimension";

const userThumb = (props) => {
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
    </View>
  );
}

userThumb.propTypes = {
  name: PropTypes.string.isRequired,
  dpUrl: PropTypes.string.isRequired,
};

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
  }
});

export default userThumb;