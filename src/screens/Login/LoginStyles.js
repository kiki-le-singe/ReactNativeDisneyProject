import { StyleSheet } from 'react-native';

import colors from 'Apps/src/utils/colors';

export default StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    padding: 20,
  },
  textInput: {
    width: 250,
    height: 50,
    marginBottom: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingLeft: 10,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: colors.grey,
    borderColor: colors.white,
    borderWidth: 1,
    marginBottom: 5,
  },
});
