import React from 'react';
import Header from './Header';

const Layout = props => (
  <div className="app">
    <Header />
    <div className="container">
      <div className="starter-template">
        <main>{props.children}</main>
      </div>
    </div>
  </div>
);

export default Layout;
