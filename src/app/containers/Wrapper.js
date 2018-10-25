import React from 'react';
import Layout from './Layout';

const Wrapper = (props) => {
  const Component = props.component;
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default Wrapper;
