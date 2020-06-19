/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types';
import colors from "../constants/colors";
import {spacing} from "../constants/dimension";

const GenericButton = (props) => {
  const {textContent, disabled} = props;
  const bgColorStyle = {
    backgroundColor: disabled ? colors.darkGrey : colors.appBlue,

  }


  return (
    <TouchableOpacity activeOpacity={0.7}  {...props} style={[styles.container, bgColorStyle]}>
      <Text style={styles.textContentStyle}>{textContent}</Text>
    </TouchableOpacity>
  );
}

GenericButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  callback: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: spacing.medium_sm,
    paddingRight: spacing.medium_sm,
    paddingTop: spacing.small,
    paddingBottom: spacing.small,
    borderRadius: 15
  },
  textContentStyle: {
    color: 'white'
  }
});

export default GenericButton;