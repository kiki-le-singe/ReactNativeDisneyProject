/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createAppContainer } from 'react-navigation';

import Loader from './src/components/Loader';
import configureStore from './src/redux/store/configureStore';
import AppNavigator from './src/AppNavigator';

const { store, persistor } = configureStore();
const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader loading />} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
