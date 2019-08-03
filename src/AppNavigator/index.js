import React from 'react';
import { createStackNavigator } from 'react-navigation';

import colors from 'Apps/src/utils/colors';
import HeaderRight from 'Apps/src/components/HeaderRight';
import HeaderLeft from 'Apps/src/components/HeaderLeft';
import HomeScreen from '../screens/Home';
import HotelDetailsScreen from '../screens/HotelDetails';
import CartDetailsModalScreen from '../screens/CartDetails';

const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.grey,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
       return {
         ...navigationOptions,
         headerLeft: (<HeaderLeft navigation={navigation} />),
         headerRight: (<HeaderRight navigation={navigation} />),
       };
     },
    },
    HotelDetails: {
      screen: HotelDetailsScreen,
      navigationOptions: {
       ...navigationOptions,
     },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    CartDetails: {
      screen: CartDetailsModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default AppNavigator;
