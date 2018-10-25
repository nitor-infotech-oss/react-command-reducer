import { combineEpics } from 'redux-observable';
import { threadEpic, postEpic } from './thread';

const rootEpic = combineEpics(threadEpic, postEpic);

export default rootEpic;
