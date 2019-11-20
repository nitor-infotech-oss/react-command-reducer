import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import localStorage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import Reddit from './app/index';
import appStore from './app/core/store/index';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [store, setStore] = useState({});

  useEffect(() => {
    const setupStore = async () => {
      setStore(await appStore(localStorage, {}));
    };
    setupStore().then(() => setIsReady(true));
  }, []);

  if (!isReady) {
    return <h1>Loading...</h1>;
  }

  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Reddit />
      </PersistGate>
    </Provider>
  );
};

export default App;
