import React from 'react';
import {Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import fontSizes from "../constants/fontSizes";

const GenericText = (props) => {
  const {textContent, type} = props;
  let textStyle = {};
  console.log(fontSizes)
  switch (type) {
    case 'title':
      textStyle = {
        fontSize: fontSizes.default,
        color: 'black',
      };
      break;
    case 'light':
      textStyle = {
        fontSize: fontSizes.h5+1
      }
      break;
    default:
      break;
  }
  console.log(textStyle)
  return (
    <Text style={textStyle}>
      {textContent}
    </Text>
  );
}

GenericText.propTypes = {
  textContent: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['light', 'title']),
};

GenericText.defaultProps = { //testing, remove this later
  textContent: Math.random() > 0.5 ? 'Kalyan Battersetty' : 'Khushbu Dutta Gupta',
  type: 'title'
}

export default GenericText;