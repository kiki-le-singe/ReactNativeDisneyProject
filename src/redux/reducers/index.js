import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import userReducer from './user';
import cartReducer from './cart';
import hotelsReducer from './hotels';

// @See: Nested Persists - https://github.com/rt2zz/redux-persist#nested-persists
const rootPersistConfig = {
  key: 'APP_',
  storage: AsyncStorage,
  blacklist: ['hotels'],
};
const userPersistConfig = {
  key: 'APP_user',
  storage: AsyncStorage,
  whitelist: ['info', 'isConnected'],
};
const cartPersistConfig = {
  key: 'APP_cart',
  storage: AsyncStorage,
  whitelist: ['hotelIds'],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
  hotels: hotelsReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
