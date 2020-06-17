import React from 'react';
import {Text, StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types';
import RoundedDP from "../RoundedDP";
import GenericText from "../GenericText";
import strings from "../../constants/strings";
import {spacing} from "../../constants/dimension";
import GenericButton from "../GenericButton";

const ProfileTitle = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.dpContainer}>
        <RoundedDP url={props.dpUrl} size={spacing.thumbnailMini} border={true}/>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.nameContainer}>
          <GenericText type={'heading'}>{props.name}</GenericText>
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonContainer}>
            <GenericButton textContent={strings.FOLLOW}/>
          </View>
          <View style={styles.buttonContainer}>
            <GenericButton textContent={strings.ENROLL}/>
          </View>
        </View>
      </View>
    </View>
  );
}

ProfileTitle.propTypes = {
  name: PropTypes.string.isRequired,
  dpUrl: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft:spacing.medium,
    marginRight:spacing.medium,
  },
  dpContainer:{
    marginLeft: spacing.small,
    marginRight: spacing.small,
  },
  mainContent:{
    marginLeft:spacing.medium,
    marginRight:spacing.medium
  },
  nameContainer:{
    marginBottom:spacing.small
  },
  buttonGroup:{
    flexDirection: 'row',
    marginTop:spacing.small_sm,
  },
  buttonContainer:{
    marginRight:spacing.medium_sm
  }
});

export default ProfileTitle;