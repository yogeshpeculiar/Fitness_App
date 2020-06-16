import React from 'react';
import {Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import fontSizes from "../constants/fontSizes";

const GenericText = (props) => {
  const {children, type} = props;
  let textStyle = {};
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
    case 'small':
      textStyle ={
        color:'black',
        fontSize:fontSizes.h6+1
      }
    default:
      break;
  }
  return (
    <Text style={textStyle}>
      {children}
    </Text>
  );
}

GenericText.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['light', 'title', 'small']),
};

GenericText.defaultProps = {
  type: 'title'
}

export default GenericText;