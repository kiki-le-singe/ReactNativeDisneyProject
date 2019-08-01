import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './headerLeftStyles';

const HeaderLeft = ({ navigation, cart }) => {
  const { hotelIds, total } = cart;
  const cartCount = hotelIds.length;

  return (
    <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate('CartDetails')}>
      <View style={[styles.container, cartCount ? null : styles.cartEmpty]}>
        <Text style={styles.cartCount}>{cartCount}</Text>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>{total} $</Text>
      </View>
    </TouchableHighlight>
  );
};

HeaderLeft.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = ({ cart }) => ({
  cart,
});

// @TODO Maybe it's not the better way, so maybe use this https://reactnavigation.org/docs/en/header-buttons.html#header-interaction-with-its-screen-component
export default connect(mapStateToProps)(HeaderLeft);
