import 'rxjs';
import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs-compat/observable/fromPromise';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

import ThreadService from '../services/thread-service';
import {
  ActionTypes,
  getThreadFail,
  getThreadSuccess,
  getPostSuccess,
  getPostFail,
} from '../actions/thread';

const threadService = new ThreadService();

export const threadEpic = action$ =>
  action$.pipe(
    filter(action => action.type === ActionTypes.GET_THREAD),
    switchMap(action => {
      return fromPromise(threadService.getThread(action.payload)).pipe(
        map(result => {
          if (result.data) {
            const threads = result.data.children;
            return getThreadSuccess(threads);
          }
          return getThreadFail('Not able to find thread');
        }),
        catchError(error => of(getThreadFail(error))),
      );
    }),
  );

export const postEpic = action$ =>
  action$.pipe(
    filter(action => action.type === ActionTypes.GET_THREAD_POST),
    switchMap(({ payload }) => {
      return fromPromise(
        threadService.getPost(payload.threadSlug, payload.postId),
      ).pipe(
        map(result => {
          if (result) {
            const post = result[0];
            const comments = result[1];
            return getPostSuccess({ post, comments });
          }
          return getPostFail('Not able to find post');
        }),
        catchError(error => of(getPostFail(error))),
      );
    }),
  );
