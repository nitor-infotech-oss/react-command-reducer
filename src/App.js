import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import localStorage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import Reddit from './app/index';
import appStore from './app/core/store/index';

const setupStore = async () => appStore(localStorage, {});

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [storeProvider, setStoreProvider] = useState({});

  useEffect(() => {
    setupStore().then(provider => {
      setStoreProvider(provider);
      setIsReady(true);
    });
  }, []);

  if (!isReady) {
    return <h1>Loading...</h1>;
  }

  return (
    <Provider store={storeProvider.store}>
      <PersistGate loading={null} persistor={storeProvider.persistor}>
        <Reddit />
      </PersistGate>
    </Provider>
  );
};

export default App;
