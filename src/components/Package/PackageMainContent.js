import React from 'react';
import {StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types';
import GenericText from "../GenericText";
import strings, {durationBuilder, priceBuilder} from "../../constants/strings";
import {spacing} from "../../constants/dimension";
import colors from "../../constants/colors";

const PackageMainContent = (props) => {
  const descriptionText = strings.DESCRIPTION + ': ' + props.description;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <GenericText type={GenericText.types.title}>{props.title.toUpperCase()}</GenericText>
      </View>
      <View style={styles.textContainer}>
        <GenericText type={GenericText.types.title}>{durationBuilder(props.duration)}</GenericText>
      </View>
      <View style={styles.textContainer}>
        <GenericText type={GenericText.types.title}>{priceBuilder(props.price)}</GenericText>
      </View>
      <View style={styles.textContainer}>
        <GenericText type={GenericText.types.title}>{descriptionText}</GenericText>
      </View>
    </View>
  );
}

PackageMainContent.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container:{
    paddingTop:spacing.medium_sm,
    // borderBottomWidth: 1,
    // borderBottomColor: colors.lightGrey,
  },
  textContainer: {
    paddingTop: spacing.small,
    paddingBottom: spacing.small
  }
});

export default PackageMainContent;