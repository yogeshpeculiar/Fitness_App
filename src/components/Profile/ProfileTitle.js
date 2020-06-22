/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React from 'react';
import {StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types';
import RoundedDP from "../RoundedDP";
import GenericText from "../GenericText";
import strings from "../../constants/strings";
import {spacing} from "../../constants/dimension";
import GenericButton from "../GenericButton";

const ProfileTitle = (props) => {

  // const onlineCircleColor = {
  //   backgroundColor: props.userOnline ? 'green' : 'red'
  // }
  return (
    <View style={styles.container}>
      <View style={styles.dpContainer}>
        <RoundedDP url={props.dpUrl} size={spacing.thumbnailMini} border={true}/>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.nameContainer}>
          <GenericText type={GenericText.types.headingBold}>{props.name}</GenericText>
          {/*<View style={styles.onlineCircleContainer}>*/}
          {/*  <View style={[styles.onlineCircle, onlineCircleColor]}/>*/}
          {/*</View>*/}
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonContainer}>
            <GenericButton
              // disabled={!props.userOnline}
              onPress={props.initiateVideoCallCallback}
              textContent={strings.CALL}/>
          </View>
          <View style={styles.buttonContainer}>
            <GenericButton
              onPress={props.enrollCallback}
              textContent={strings.ENROLL}
            />
          </View>

        </View>
      </View>
    </View>
  );
}

ProfileTitle.propTypes = {
  name: PropTypes.string.isRequired,
  dpUrl: PropTypes.string.isRequired,
  enrollCallback: PropTypes.func,
  initiateVideoCallCallback: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: spacing.medium,
    marginRight: spacing.medium,
  },
  dpContainer: {
    marginLeft: spacing.small,
    marginRight: spacing.small,
  },
  mainContent: {
    marginLeft: spacing.medium,
    marginRight: spacing.medium
  },
  nameContainer: {
    marginBottom: spacing.small,
    flexDirection:'row'
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: spacing.small_sm,
  },
  buttonContainer: {
    marginRight: spacing.medium_sm,

  },
  onlineCircleContainer:{
    marginLeft:spacing.medium_sm,
    alignContent:'center',
    justifyContent:'center'
  },
  onlineCircle: {
    height:15,
    width:15,
    borderRadius:8
  }
});

export default ProfileTitle;