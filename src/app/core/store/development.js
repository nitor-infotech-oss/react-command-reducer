import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistCombineReducers } from 'redux-persist';

import applicationReducer from '../reducers/index';
import rootEpic from '../epics/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

export default async (storage, initialState = {}) => {
  const persistReducer = persistCombineReducers(
    {
      key: 'root',
      storage,
      debug: true,
    },
    applicationReducer,
  );

  const store = createStore(
    persistReducer,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );

  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store);
  return { store, persistor };
};
