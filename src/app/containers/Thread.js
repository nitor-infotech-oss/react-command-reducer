import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Comment from '../components/Comment';
import PostBadge from '../components/PostBadge';
import SortSelect from '../components/SortSelect';
import threadActions from '../core/actions/thread';
import UIHelpers from '../utils/ui-helpers';

const styles = {
  thumb: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
};

const ThreadContainer = ({
  searchTerm,
  getPost,
  match,
  sortComments,
  comments,
  post,
}) => {
  useEffect(() => {
    const { slug, id } = match.params;
    getPost(slug, id);
  }, []);

  if (!post) {
    return <div>Looking for your post....</div>;
  }

  return (
    <div>
      <div className="card">
        <NavLink className="btn btn-primary btn-block" to={`/${searchTerm}`}>
          {`Back to ${searchTerm} thread`}
        </NavLink>
        <p />
        <img
          className="border border-info rounded-circle border-2 card-img-top"
          src={UIHelpers.getThumbUrl(post.preview, post.author, '200')}
          style={styles.thumb}
          alt={post.author}
        />
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <PostBadge {...post} />
          <p className="card-text">
            <a href={post.url} rel="noopener noreferrer" target="_blank">
              More Details
            </a>
          </p>
          {comments.length > 0 ? (
            <p className="card-text">
              <SortSelect onSort={sortComments} />
            </p>
          ) : null}
        </div>
        <p />
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

ThreadContainer.propTypes = {
  searchTerm: PropTypes.string,
  getPost: PropTypes.func,
  match: PropTypes.object,
  sortComments: PropTypes.func,
  comments: PropTypes.array,
  post: PropTypes.object,
};

const mapStateToProps = state => {
  const props = {
    searchTerm: state.thread.threadSlug,
    post: state.thread.selectedPost ? state.thread.selectedPost.data : null,
    comments: state.thread.selectedPostComments,
  };
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    sortComments: sortDetails =>
      dispatch(threadActions.sortComments(sortDetails)),
    getPost: (slug, id) => dispatch(threadActions.getPost(slug, id)),
  };
};

const Thread = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ThreadContainer),
);

export default Thread;
