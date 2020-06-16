import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';

import RoundedDP from '../RoundedDP';
import GenericText from "../GenericText";
import {coachedPeople} from "../../constants/strings";

const trainerThumb = (props) => {
  return (
    <View style={styles.container}>
      <RoundedDP/>
      <GenericText/>
      <GenericText
        textContent={coachedPeople(props.experience)}
        type={'light'}
      />
    </View>
  );
}

trainerThumb.propTypes = {
  name: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  dpUrl: PropTypes.string.isRequired,
  slots: PropTypes.number.isRequired
};

trainerThumb.defaultProps={ //testing, remove this later
  name:'he',
  experience:3,
  dpUrl:'322',
  slots:2
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center"
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
});

export default trainerThumb;