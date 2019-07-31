import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk'

import persistedReducer from '../reducers';

export default preloadedState => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
