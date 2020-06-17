import React from 'react';
import {View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import colors from "../constants/colors";
import {spacing} from "../constants/dimension";

const RoundedDP = (props) => {
  const {url, size = spacing.thumbnail, border=false} = props;
  const sizeStyle = {
    height: size,
    width: size,
    borderRadius: size / 2,
    borderWidth: border?1:0
  }
  return (
    <View style={[styles.container, sizeStyle]}>
      <Image
        source={{uri: url}}
        style={sizeStyle}
      />
    </View>
  );
}

RoundedDP.propTypes = {
  url: PropTypes.string.isRequired,
};

// RoundedDP.defaultProps = { //testing, remove this later
//   url: Math.random()>0.5? 'https://i.ya-webdesign.com/images/people-standing-png-4.png':'https://www.pngitem.com/pimgs/m/28-288789_transparent-png-person-standing-standing-png-download.png'
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgGrey,
  }
});

export default RoundedDP;