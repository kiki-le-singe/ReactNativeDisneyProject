import { StyleSheet } from 'react-native';

import mediaQueries from 'Apps/src/utils/mediaQueries';
import colors from '../../utils/colors';

const mainBorderRadius = 20;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: '100%',
    height: mediaQueries.isSmallScreen ? 100 : 135,
    marginBottom: 25,
    borderRadius: mainBorderRadius,
  },
  image: {
    borderTopLeftRadius: mainBorderRadius,
    borderBottomLeftRadius: mainBorderRadius,
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    width: mediaQueries.isSmallScreen ? 100 : 130,
    height: '100%',
  },
  rightContent: {
    flex: 1,
    borderTopRightRadius: mainBorderRadius,
    borderBottomRightRadius: mainBorderRadius,
    padding: 5,
  },
  header: {
    borderTopRightRadius: mainBorderRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  price: {
    textAlign: 'right',
  },
  priceText: {
    color: colors.greyAB,
    fontSize: 10,
  },
  desc: {
    color: colors.greyAB,
    fontSize: 10,
  },
  buttonContainer: {
    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  isAdded: {
    backgroundColor: colors.red,
  },
  isNotAdded: {
    backgroundColor: colors.green,
  },
  buttonTitle: {
    color: colors.white,
    fontSize: 16,
  },
});
