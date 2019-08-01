import { StyleSheet } from 'react-native';

import colors from 'Apps/src/utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.green,
    padding: 5,
    width: 100,
  },
  cartCount: {
    color: colors.white,
    fontWeight: 'bold',
  },
  totalText: {
    color: colors.white,
  },
  cartEmpty: {
    backgroundColor: colors.red,
  },
});
