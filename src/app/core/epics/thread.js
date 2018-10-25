import 'rxjs';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import ThreadService from '../services/thread-service';
import { ActionTypes } from '../actions/thread';
import * as threadActions from '../actions/thread';

const threadService = new ThreadService();

export const threadEpic = action$ =>
  action$
    .ofType(ActionTypes.GET_THREAD)
    .map(action => action.payload)
    .switchMap(slug =>
      Observable.fromPromise(threadService.getThread(slug))
        .map((result) => {
          if (result.data) {
            const threads = result.data.children;
            return new threadActions.getThreadSuccess(threads);
          }
          return new threadActions.getThreadFail('Not able to find thread');
        })
        .catch(error => of(new threadActions.getThreadFail(error))),
    );

export const postEpic = action$ =>
  action$
    .ofType(ActionTypes.GET_THREAD_POST)
    .map(action => action.payload)
    .switchMap(postDetails =>
      Observable.fromPromise(
        threadService.getPost(postDetails.threadSlug, postDetails.postId),
      ).map((result) => {
        if (result) {
          const post = result[0];
          const comments = result[1];
          return new threadActions.getPostSuccess({ post, comments });
        }
        return new threadActions.getPostFail('Not able to find post');
      }),
    );
