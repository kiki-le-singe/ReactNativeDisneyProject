import React from 'react';
import { Button } from 'react-native';

import colors from 'Apps/src/utils/colors';

const HeaderRight = ({ loading }) => {
  return (
    <Button
      onPress={() => alert('Go to login modal')}
      title="Login"
      color={colors.white}
    />
  );
};

export default HeaderRight;
