import { StyleSheet } from 'react-native';

import colors from 'Apps/src/utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 5,
    marginRight: 5,
    borderRadius: 5,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginRight: 5,
    backgroundColor: colors.grey,
  },
});
