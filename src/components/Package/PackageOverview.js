/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import PropTypes from 'prop-types';
import GenericText from "../GenericText";
import strings, {priceBuilder} from "../../constants/strings";
import {spacing} from "../../constants/dimension";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import MainContent from './PackageMainContent';
import colors from "../../constants/colors";
import GenericButton from "../GenericButton";

const PackageOverview = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const chevron = !collapsed ? 'chevron-up' : 'chevron-down';
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => setCollapsed(!collapsed)}>
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}>
          <GenericText type={GenericText.types.heading}>{props.title.toUpperCase()}</GenericText>
        </View>
        <View style={styles.chevronContainer}>
          <FontAwesome
            name={chevron}
            color={'black'}
            size={10}
          />
        </View>
      </View>
      {
        !collapsed && (
          <View style={styles.mainContentContainer}>
            <MainContent
              title={props.title}
              duration={props.duration}
              price={props.price}
              description={props.description}
            />
            <View style={styles.orderContainer}>
              <View style={styles.textContainer}>
                <GenericText type={GenericText.types.title}>{priceBuilder(props.price)}</GenericText>
              </View>
              <View style={styles.buttonContainer}>
                <GenericButton textContent={strings.PROCEED}/>
              </View>
            </View>
          </View>
        )
      }
      {
        collapsed && <View style={styles.separator}/>
      }
    </TouchableOpacity>
  );
}

PackageOverview.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  callback: PropTypes.func
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row'
  },
  titleTextContainer: {
    width: 300,
  },
  chevronContainer: {
    paddingTop: spacing.small
  },
  separator: {
    borderBottomWidth: 1,
    paddingTop: spacing.medium,
    borderBottomColor: colors.lightGrey,
  },
  mainContentContainer: {
    marginTop: spacing.medium,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    paddingBottom: spacing.medium_sm
  },
  orderContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingTop: spacing.medium,
    paddingBottom: spacing.medium,
    marginTop: spacing.medium_sm
  }

});

export default PackageOverview;