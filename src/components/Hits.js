/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types';
import fontSizes from "../constants/fontSizes";

const Hits = (props) => {
  const {count, property} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.count}>
        {count}
      </Text>
      <Text style={styles.property}>
        {property}
      </Text>
    </View>
  );
}

Hits.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  property: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  count:{
    color:'black',
    fontWeight:'bold',
    fontSize:fontSizes.h2,
    paddingLeft:0
  },
  property:{
    fontSize:fontSizes.h4,
    paddingLeft:0
  }
});

export default Hits;