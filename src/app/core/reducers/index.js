import { combineReducers } from 'redux';

import threadReducer from './thread';

const reducers = {
  thread: threadReducer,
};

const applicationReducer = combineReducers(reducers);

export default applicationReducer;
