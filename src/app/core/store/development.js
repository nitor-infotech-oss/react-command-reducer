import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, autoRehydrate } from 'redux-persist';

import applicationReducer from '../reducers/index';
import rootEpic from '../epics/index';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default async (storage, initialState = {}) => {
  const store = createStore(
    applicationReducer,
    initialState,
    compose(applyMiddleware(epicMiddleware), autoRehydrate({ log: false })),
  );

  persistStore(store, { storage });
  return store;
};
