/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React from 'react';
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

// CustomProgressBar.defaultProps = {
//   progress: Math.random() > 0.5 ? 75: 50,
// }

export default CustomProgressBar;