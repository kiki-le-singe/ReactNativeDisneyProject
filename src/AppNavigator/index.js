import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import HotelDetailsScreen from '../screens/HotelDetails';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    HotelDetails: HotelDetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);

export default AppNavigator;
