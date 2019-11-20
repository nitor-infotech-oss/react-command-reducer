import { combineEpics } from 'redux-observable';
import { threadEpic, postEpic } from './thread';

export default combineEpics(threadEpic, postEpic);
