import CommandReducer from '../../utils/command-reducer';

import threadActions, { ActionTypes } from '../actions/thread';
import threadCommands from '../commands/thread';

const INITIAL_STATE = {
  threadSlug: 'reactjs',
  posts: [],
  selectedPostId: null,
  selectedPost: null,
  selectedPostComments: [],
  error: null,
  sortCriteria: {},
  isLoading: false,
};

const commandReducer = new CommandReducer(INITIAL_STATE);

const threadReducer = commandReducer
  .add(
    threadActions.getThread,
    threadCommands.getThread,
    ActionTypes.GET_THREAD,
  )
  .add(
    threadActions.getThreadSuccess,
    threadCommands.getThreadSuccess,
    ActionTypes.GET_THREAD_SUCCESS,
  )
  .add(
    threadActions.getThreadFail,
    threadCommands.getThreadFail,
    ActionTypes.GET_THREAD_FAIL,
  )
  .add(
    threadActions.getPost,
    threadCommands.getPost,
    ActionTypes.GET_THREAD_POST,
  )
  .add(
    threadActions.getPostSuccess,
    threadCommands.getPostSuccess,
    ActionTypes.GET_THREAD_POST_SUCCESS,
  )
  .add(
    threadActions.getPostFail,
    threadCommands.getPostFail,
    ActionTypes.GET_THREAD_POST_FAIL,
  )
  .add(
    threadActions.sortComments,
    threadCommands.sortComments,
    ActionTypes.SORT_COMMENTS,
  )
  .reducer();

export default threadReducer;
