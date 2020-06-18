/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import {StyleSheet, TouchableOpacity} from 'react-native'
import {spacing} from "../constants/dimension";

const RoundedFas = (props) => {
  const {fas} = props;

  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome
        name={fas}
        color="grey"
        size={20}
      />
    </TouchableOpacity>
  );
}

RoundedFas.propTypes = {
  fas: PropTypes.string.isRequired,
  callback:PropTypes.func
};

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
    height:spacing.fasIcon,
    width:spacing.fasIcon,
    borderRadius:spacing.fasIcon/2,
  }
});

export default RoundedFas;