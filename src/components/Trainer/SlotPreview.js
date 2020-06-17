import React from 'react';
import {Text, StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types';
import CustomProgressBar from "../CustomProgressBar";
import GenericText from "../GenericText";
import strings from "../../constants/strings";
import {spacing as dimension} from "../../constants/dimension";

const SlotPreview = (props) => {
  const {usedSlots, remainingSlots} = props;
  const progress = usedSlots / (usedSlots + remainingSlots);
  return (
    <View style={styles.container}>
      <View style={styles.slotTextContainer}>
        <GenericText type={GenericText.types.small}>
          {strings.SLOTS}
        </GenericText>
      </View>
      <View style={{flex:1}}>
        <CustomProgressBar progress={progress}/>
      </View>
      <View style={styles.slotTextContainer}>
        <GenericText type={GenericText.types.small}>
          {remainingSlots}
        </GenericText>
      </View>
    </View>
  );
}

SlotPreview.propTypes = {
  usedSlots: PropTypes.number.isRequired,
  remainingSlots: PropTypes.number.isRequired
};

// SlotPreview.defaultProps = {
//   usedSlots: 4,
//   remainingSlots: 2
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center"
  },
  slotTextContainer: {
    marginRight: dimension.small,
    marginLeft: dimension.small
  }
});

export default SlotPreview;