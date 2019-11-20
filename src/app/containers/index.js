import React from 'react';
import Wrapper from './Wrapper';
import Home from './Home';
import Thread from './Thread';

const Containers = [
  {
    path: '/',
    exact: true,
    name: 'Threads',
    main: props => <Wrapper {...props} component={Home} />,
  },
  {
    path: '/:slug',
    exact: true,
    name: 'Threads',
    main: props => <Wrapper {...props} component={Home} />,
  },
  {
    path: '/:slug/:id',
    exact: true,
    name: 'Thread Posts',
    main: props => <Wrapper {...props} component={Thread} />,
  },
];

export default Containers;
