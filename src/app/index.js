import React from 'react';
import { connect } from 'react-redux';
import Router from './router';

const AppContainer = () => (
  <div className="App">
    <Router />
  </div>
);

// export class AppContainer extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Router />
//       </div>
//     );
//   }
// }

const mapStateToProps = state => ({});

const Reddit = connect(mapStateToProps)(AppContainer);

export default Reddit;
