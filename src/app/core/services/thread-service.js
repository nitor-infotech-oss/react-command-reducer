// import { ajax } from 'rxjs/ajax';

const endPoints = 'https://www.reddit.com/r/';

export default class ThreadService {
  getThread(threadSlug) {
    return fetch(`${endPoints}${threadSlug}.json`)
      .then(response => response.json())
      .catch(this.handleErrors);
  }

  getPost(threadSlug, postId) {
    return fetch(`${endPoints}${threadSlug}/${postId}.json`)
      .then(response => response.json())
      .catch(this.handleErrors);
  }
}
