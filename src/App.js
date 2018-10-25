import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { asyncSessionStorage } from 'redux-persist/storages';

import Reddit from './app/index';
import appStore from './app/core/store/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
    this.store = null;
  }

  async componentWillMount() {
    this.store = await appStore(asyncSessionStorage, {});
    this.setState({ isReady: true });
  }

  render() {
    if (this.state.isReady === false) {
      return <div>App is getting ready....</div>;
    }

    return (
      <Provider store={this.store}>
        <Reddit />
      </Provider>
    );
  }
}

export default App;
