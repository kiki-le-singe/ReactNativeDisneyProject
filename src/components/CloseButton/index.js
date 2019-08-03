import React from 'react';
import { Platform, Button } from 'react-native';
import PropTypes from 'prop-types';

import colors from 'Apps/src/utils/colors';

const CloseButton = ({ navigation }) => {
  return (
    <Button
      onPress={() => navigation.goBack(null)}
      title="Close"
      color={Platform.OS === 'ios' ? colors.white : colors.grey}
    />
  );
};

CloseButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CloseButton;
