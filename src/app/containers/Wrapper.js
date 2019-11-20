import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

const Wrapper = ({ component }) => {
  const Component = component;

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

Wrapper.propTypes = {
  component: PropTypes.elementType,
};

export default Wrapper;
