import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import HotelDetailsScreen from '../screens/HotelDetails';
import CartDetailsModalScreen from '../screens/CartDetails';

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    HotelDetails: HotelDetailsScreen,
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
