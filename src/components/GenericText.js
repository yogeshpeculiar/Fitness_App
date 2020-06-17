import React from 'react';
import {Text} from 'react-native'
import PropTypes from 'prop-types';
import fontSizes from "../constants/fontSizes";

const GenericText = (props) => {
  const {children, type} = props;
  let textStyle = {};
  switch (type) {
    case 'heading':
      textStyle = {
        fontSize: fontSizes.h0,
        color: 'black',
        fontWeight: 'bold'
      };
      break;
    case 'title':
      textStyle = {
        fontSize: fontSizes.default,
        color: 'black',
      };
      break;
    case 'titleBold':
      textStyle = {
        fontSize: fontSizes.default,
        color: 'black',
        fontWeight: 'bold'
      };
      break;
    case 'light':
      textStyle = {
        fontSize: fontSizes.h5 + 1
      }
      break;
    case 'small':
      textStyle = {
        color: 'black',
        fontSize: fontSizes.h6 + 1
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['light', 'title', 'small', 'heading', 'titleBold']),
};

GenericText.defaultProps = {
  type: 'title'
}

export default GenericText;