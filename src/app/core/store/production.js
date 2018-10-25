import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, autoRehydrate, getStoredState, createPersistor } from 'redux-persist';

import applicationReducer from '../reducers/index';
import rootEpic from '../epics/index';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default async (storage, initialState = {}) => {
  const persistConfig = {
    storage,
    serialize: true,
  };

  let store = null;

  await getStoredState(persistConfig)
    .then((err, restoredState) => {
      store = createStore(
        applicationReducer,
        restoredState,
        compose(applyMiddleware(epicMiddleware), autoRehydrate()),
      );
      const persistor = createPersistor(store, persistConfig);
    })
    .catch((r) => {
      console.log(r);
    });
  return store;
};
