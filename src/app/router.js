import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Containers from './containers/index';

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        {Containers.map(route => (
          <Route
            exact={route.exact}
            path={route.path}
            component={route.main}
            key={route.path}
          />
        ))}
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
