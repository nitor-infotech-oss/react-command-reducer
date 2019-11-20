import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {
  getStoredState,
  persistStore,
  persistCombineReducers,
} from 'redux-persist';

import applicationReducer from '../reducers/index';
import rootEpic from '../epics/index';

export default async storage => {
  const persistConfig = {
    key: 'root',
    storage,
    serialize: true,
  };
  const persistReducer = persistCombineReducers(
    persistConfig,
    applicationReducer,
  );
  const epicMiddleware = createEpicMiddleware();
  const restoredState = await getStoredState(persistConfig);

  const store = createStore(
    persistReducer,
    restoredState,
    applyMiddleware(epicMiddleware),
  );
  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store);

  return { store, persistor };
};
