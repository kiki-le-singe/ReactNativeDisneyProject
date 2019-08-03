import React from 'react';
import { View, TouchableHighlight, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import colors from 'Apps/src/utils/colors';
import styles from './headerRightStyles';

const HeaderRight = ({ navigation, user }) => {
  const { isConnected, info } = user;
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  if (!isConnected) {
    return (
      <Button
        onPress={goToLogin}
        title="Login"
        color={colors.white}
      />
    );
  }

  return (
    <TouchableHighlight underlayColor="transparent" onPress={goToLogin}>
      <View style={styles.container}>
        <View style={styles.avatar} />
        <Text>{info.username}</Text>
      </View>
    </TouchableHighlight>
  );
};

HeaderRight.propTypes = {
  user: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

// @TODO Maybe it's not the better way, so maybe use this https://reactnavigation.org/docs/en/header-buttons.html#header-interaction-with-its-screen-component
export default connect(mapStateToProps)(HeaderRight);
