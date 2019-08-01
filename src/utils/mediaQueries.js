import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const maxSmallDeviceWidth = 320;
const maxMediumDeviceWidth = 375;
const maxLargeDeviceWidth = 425;

const isSmallScreen = width <= maxSmallDeviceWidth;
const isMediumScreen = width > maxSmallDeviceWidth && width <= maxMediumDeviceWidth;
const isLargeScreen = width > maxMediumDeviceWidth && width <= maxLargeDeviceWidth;

export default {
  isSmallScreen,
  isMediumScreen,
  isLargeScreen,
};
