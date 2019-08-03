import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const imageSize = 225;

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  viewContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
  },
  price: {
    color: colors.green,
  },
  desc: {
    color: colors.greyAB,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize,
  },
});
