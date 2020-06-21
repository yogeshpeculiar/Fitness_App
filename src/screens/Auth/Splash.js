import React from "react";
import {Image, View} from "react-native";
import AppLogo from '../../../assets/logo.png';

const splash = () => {
  return (
    <View style={{flex: 1, backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={AppLogo}/>
    </View>
  );
}

export default splash;