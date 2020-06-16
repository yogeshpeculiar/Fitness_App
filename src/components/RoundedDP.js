import React from 'react';
import {View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import colors from "../constants/colors";
import {spacing} from "../constants/dimension";

const RoundedDP = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: props.url}}
        style={styles.imageStyle}
      />
    </View>
  );
}

RoundedDP.propTypes = {
  url: PropTypes.string.isRequired,
};

RoundedDP.defaultProps = { //testing, remove this later
  url: Math.random()>0.5? 'https://i.ya-webdesign.com/images/people-standing-png-4.png':'https://www.pngitem.com/pimgs/m/28-288789_transparent-png-person-standing-standing-png-download.png'
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgGrey,
    height: spacing.thumbnailSize,
    width: spacing.thumbnailSize,
    borderRadius: spacing.thumbnailSize / 2
  },
  imageStyle: {
    height: spacing.thumbnailSize,
    width: spacing.thumbnailSize,
    borderRadius: spacing.thumbnailSize / 2
  }
});

export default RoundedDP;