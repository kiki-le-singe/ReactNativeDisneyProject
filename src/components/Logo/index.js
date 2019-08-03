import React from 'react';
import { Image } from 'react-native';

import images from 'Apps/src/utils/images';
import styles from './logoStyles';

const Logo = ({ loading }) => {
  return (
    <Image
      source={images.logo}
      style={styles.image}
    />
  );
};

export default Logo;
