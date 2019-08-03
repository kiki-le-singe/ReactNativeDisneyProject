import React from 'react';
import { createStackNavigator } from 'react-navigation';

import colors from 'Apps/src/utils/colors';
import HeaderRight from 'Apps/src/components/HeaderRight';
import HeaderLeft from 'Apps/src/components/HeaderLeft';
import CloseButton from 'Apps/src/components/CloseButton';
import Logo from 'Apps/src/components/Logo';
import HomeScreen from '../screens/Home';
import HotelDetailsScreen from '../screens/HotelDetails';
import CartDetailsModalScreen from '../screens/CartDetails';
import LoginScreen from '../screens/Login';

const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.grey,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
const stackConfig = {
  defaultNavigationOptions: {
    ...navigationOptions,
    headerTitle: <Logo />,
  },
  headerLayoutPreset: 'center',
};

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
       return {
         headerLeft: (<HeaderLeft navigation={navigation} />),
         headerRight: (<HeaderRight navigation={navigation} />),
       };
     },
    },
    HotelDetails: HotelDetailsScreen,
  },
  {
    initialRouteName: 'Home',
    ...stackConfig,
  }
);

const CartDetailsModalStack = createStackNavigator(
    {
      CartDetails: {
        screen: CartDetailsModalScreen,
        navigationOptions: ({ navigation }) => {
         return {
           headerRight: <CloseButton navigation={navigation} />,
         };
       },
      },
      HotelDetails: HotelDetailsScreen,
    },
    {
      initialRouteName: 'CartDetails',
      ...stackConfig,
    },
);

const LoginModalStack = createStackNavigator(
    {
      Login: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => {
         return {
           headerRight: <CloseButton navigation={navigation} />,
         };
       },
      },
    },
    {
      initialRouteName: 'Login',
      ...stackConfig,
    },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    CartDetails: {
      screen: CartDetailsModalStack,
    },
    Login: {
      screen: LoginModalStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default RootStack;
