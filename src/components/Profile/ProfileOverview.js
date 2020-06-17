import React from 'react';
import {Text, StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GenericText from "../GenericText";
import strings from "../../constants/strings";
import {spacing} from "../../constants/dimension";

import ProfileTitle from './ProfileTitle';
import ProfileHits from './ProfileHits';
import ExpandingText from "../ExpandingText";
import RoundedFas from "../RoundedFas";

const ProfileOverview = (props) => {
  const {hits} = props;
  return (
    <View style={styles.container}>
      <View style={styles.profileTitleContainer}>
        <ProfileTitle
          name={props.name}
          dpUrl={props.dpUrl}
        />
      </View>
      <View style={styles.profileHitsContainer}>
        <ProfileHits
          followers={hits.followers}
          transformations={hits.transformations}
          rating={hits.rating}
          following={hits.following}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <ExpandingText>{props.description}</ExpandingText>
      </View>

      <View style={styles.descriptionContainer}>
        <GenericText type={GenericText.types.titleBold}>{strings.SOCIAL}</GenericText>
        <View style={styles.socialGroup}>
          <View style={styles.socialContainer}>
            <RoundedFas fas={'facebook-f'}/>
          </View>
          <View style={styles.socialContainer}>
            <RoundedFas fas={'instagram'}/>
          </View>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <GenericText type={GenericText.types.titleBold}>{strings.POSTS}</GenericText>
        <View style={{height:300}}>

        </View>
      </View>

    </View>
  );
}

ProfileOverview.propTypes = {
  name: PropTypes.string.isRequired,
  dpUrl: PropTypes.string.isRequired,
  hits: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    transformations: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })
};

ProfileOverview.defaultProps = {
  name: 'Sangeetha Thevar',
  dpUrl: Math.random() > 0.5 ? 'https://i.ya-webdesign.com/images/people-standing-png-4.png' : 'https://www.pngitem.com/pimgs/m/28-288789_transparent-png-person-standing-standing-png-download.png',
  hits: {
    followers: 555,
    following: 19,
    transformations: 161,
    rating: 4.6,
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien neque, auctor sit amet odio sit amet, euismod placerat augue. Aenean molestie est neque, quis commodo leo semper sit amet. Mauris nec neque et ex posuere viverra. Sed auctor faucibus nisi sit amet varius. Nullam lacinia, nulla sed pulvinar scelerisque, est libero pulvinar ligula, et auctor eros ipsum vel tortor. Vivamus massa neque, ullamcorper in purus at, placerat euismod est. Aliquam sodales neque et malesuada finibus. Aliquam libero tortor, venenatis sit amet dapibus ac, rhoncus in quam. Pellentesque pretium eros justo, nec accumsan dolor facilisis sed. Sed et augue ut lorem rhoncus ultrices. Duis condimentum aliquet finibus. Praesent iaculis justo ut elit feugiat ultricies. Nulla consequat diam elit, a auctor urna convallis gravida. Nulla facilisi. Sed porttitor pulvinar sapien sed venenatis.',
  speciality: ['Fat-loss', 'Transformation', 'General well being'],
  profileType: 'TRAINER'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileTitleContainer: {
    marginTop: spacing.large,
  },
  profileHitsContainer: {
    marginTop: spacing.medium,
  },
  descriptionContainer: {
    marginLeft: spacing.medium_lg,
    marginRight: spacing.medium_lg,
    marginTop: spacing.medium_lg
  },
  socialGroup: {
    flexDirection: 'row',
    marginTop: spacing.medium
  },
  socialContainer:{
    marginRight: spacing.medium_lg
  }

});

export default ProfileOverview;