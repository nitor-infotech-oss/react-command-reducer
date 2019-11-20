import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Post from '../components/Post';
import threadActions from '../core/actions/thread';

const HomeContainer = ({
  history,
  match,
  getThread,
  posts,
  searchTerm,
  isLoading,
}) => {
  const slug = match.params ? match.params.slug : null;

  useEffect(() => {
    getThread(slug);
  }, [slug]);

  const showComments = postId => {
    history.go(`/${searchTerm}/${postId}`);
  };

  // match.params.slug === undefined ? {} : isLoading ? {} : posts.length <= 0 ? {} : {};

  if (match.params.slug === undefined) {
    return (
      <div className="alert alert-warning">
        Enter reddit thread name to search!
      </div>
    );
  }
  if (isLoading) {
    return <div className="alert alert-info">searching...</div>;
  }
  if (posts.length <= 0) {
    return (
      <div className="alert alert-danger">
        Sorry, nothing found for your search!
      </div>
    );
  }

  return (
    <div className="list-group">
      {posts.map(post => (
        <Post
          onCommentClick={showComments}
          term={searchTerm}
          key={post.data.id}
          {...post.data}
        />
      ))}
    </div>
  );
};

HomeContainer.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  getThread: PropTypes.func,
  posts: PropTypes.array,
  searchTerm: PropTypes.string,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  const props = {
    searchTerm: state.thread.threadSlug,
    posts: state.thread.posts,
    isLoading: state.thread.isLoading,
  };
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    getThread: slug => dispatch(threadActions.getThread(slug)),
  };
};

const Home = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeContainer),
);

export default Home;
