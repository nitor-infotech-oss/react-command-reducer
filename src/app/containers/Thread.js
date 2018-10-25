import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Comment from '../components/Comment';
import PostBadge from '../components/PostBadge';
import SortSelect from '../components/SortSelect';
import * as threadActions from '../core/actions/thread';
import UIHelpers from '../utils/ui-helpers';

const styles = {
  thumb: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
};

class ThreadContainer extends React.Component {
  constructor() {
    super();
    this.onSort = (sortDetails) => {
      this.props.dispatch(new threadActions.sortComments(sortDetails));
    };
  }

  componentWillMount() {
    const { slug, id } = this.props.match.params;
    this.props.dispatch(new threadActions.getPost(slug, id));
  }

  render() {
    if (this.props.post === null || this.props.post === undefined) {
      return <div>Looking for your post....</div>;
    }
    const { searchTerm, post } = this.props;
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
              <a href={post.url} target="_blank">
                {'More Details'}
              </a>
            </p>
            {this.props.comments.length > 0 ? (
              <p className="card-text">
                <SortSelect onSort={this.onSort} />
              </p>
            ) : null}
          </div>
          <p />
          {this.props.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const props = {
    searchTerm: state.thread.threadSlug,
    post: state.thread.selectedPost ? state.thread.selectedPost.data : null,
    comments: state.thread.selectedPostComments,
  };
  return props;
};

const Thread = withRouter(connect(mapStateToProps)(ThreadContainer));

export default Thread;
