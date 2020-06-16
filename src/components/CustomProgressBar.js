import React from 'react';
import {Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import ProgressBar from 'react-native-progress/Bar';
import colors from "../constants/colors";

const CustomProgressBar = (props) => {
  return (
    <ProgressBar
      progress={props.progress}
      width={null}
      unfilledColor={colors.bgGrey}
      color={colors.appBlue}
    />
  );
}

CustomProgressBar.propTypes = {
  progress: PropTypes.number.isRequired // from 0 to 1
};

CustomProgressBar.defaultProps = { //testing, remove this later
  progress: Math.random() > 0.5 ? 75: 50,
}

export default CustomProgressBar;