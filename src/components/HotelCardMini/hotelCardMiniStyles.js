import { StyleSheet } from 'react-native';

import colors from 'Apps/src/utils/colors';

const mainBorderRadius = 5;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: 220,
    height: 100,
    marginBottom: 25,
    borderRadius: mainBorderRadius,
  },
  image: {
    borderTopLeftRadius: mainBorderRadius,
    borderBottomLeftRadius: mainBorderRadius,
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    width: 80,
    height: '100%',
  },
  title: {
    textAlign: 'center',
  },
  price: {
    marginTop: 15,
    textAlign: 'right',
  },
  priceText: {
    color: colors.greyAB,
    fontSize: 10,
  },
  rightContent: {
    flex: 1,
    paddingRight: 10,
    justifyContent: 'center',
  },
});
