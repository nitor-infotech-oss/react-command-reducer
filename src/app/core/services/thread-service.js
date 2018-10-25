export default class ThreadService {
  getThread(threadSlug) {
    return fetch(`https://www.reddit.com/r/${threadSlug}.json`)
      .then(response => response.json())
      .catch(this.handleErrors);
  }

  getPost(threadSlug, postId) {
    return fetch(`https://www.reddit.com/r/${threadSlug}/${postId}.json`)
      .then(response => response.json())
      .catch(this.handleErrors);
  }
}
