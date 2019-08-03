import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

import colors from 'Apps/src/utils/colors';

const CloseButton = ({ navigation }) => {
  return (
    <Button
      onPress={() => navigation.goBack(null)}
      title="Close"
      color={colors.white}
    />
  );
};

CloseButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CloseButton;
