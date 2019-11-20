import type from '../../utils/type';

export const ActionTypes = {
  GET_THREAD: type('Get [thread]'),
  GET_THREAD_SUCCESS: type('Get [thread] success'),
  GET_THREAD_FAIL: type('Get [thread] fail'),
  GET_THREAD_POST: type('Get [thread] post'),
  GET_THREAD_POST_SUCCESS: type('Get [thread] post success'),
  GET_THREAD_POST_FAIL: type('Get [thread] post fail'),
  SORT_COMMENTS: type('Sort [thread] post comments'),
};

export const getThread = threadSlug => ({
  type: ActionTypes.GET_THREAD,
  payload: threadSlug,
});

export const getThreadSuccess = posts => ({
  type: ActionTypes.GET_THREAD_SUCCESS,
  payload: posts,
});

export const getThreadFail = error => ({
  type: ActionTypes.GET_THREAD_FAIL,
  payload: error,
});

export const getPost = (threadSlug, postId) => ({
  type: ActionTypes.GET_THREAD_POST,
  payload: {
    threadSlug,
    postId,
  },
});

export const getPostSuccess = post => ({
  type: ActionTypes.GET_THREAD_POST_SUCCESS,
  payload: post,
});

export const getPostFail = error => ({
  type: ActionTypes.GET_THREAD_POST_FAIL,
  payload: error,
});

export const sortComments = sortDetails => ({
  type: ActionTypes.SORT_COMMENTS,
  payload: sortDetails,
});

export default {
  getThread,
  getThreadSuccess,
  getThreadFail,
  getPost,
  getPostSuccess,
  getPostFail,
  sortComments,
};
