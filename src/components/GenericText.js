import React from 'react';
import {Text} from 'react-native'
import PropTypes from 'prop-types';
import fontSizes from "../constants/fontSizes";

const types = {
  light: 'light',
  title: 'title',
  small: 'small',
  headingBold: 'headingBold',
  heading:'heading',
  titleBold: 'titleBold'
}

const GenericText = (props) => {
  const {children, type} = props;
  let textStyle = {};
  switch (type) {
    case types.headingBold:
      textStyle = {
        fontSize: fontSizes.h0,
        color: 'black',
        fontWeight: 'bold'
      };
      break;
      case types.heading:
      textStyle = {
        fontSize: fontSizes.h1,
        color: 'black',
      };
      break;
    case types.title:
      textStyle = {
        fontSize: fontSizes.default,
        color: 'black',
      };
      break;
    case types.titleBold:
      textStyle = {
        fontSize: fontSizes.default,
        color: 'black',
        fontWeight: 'bold'
      };
      break;
    case types.light:
      textStyle = {
        fontSize: fontSizes.h5 + 1
      }
      break;
    case types.small:
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

GenericText.types = types;

GenericText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(Object.values(types)),
};

GenericText.defaultProps = {
  type: 'title'
}

export default GenericText;