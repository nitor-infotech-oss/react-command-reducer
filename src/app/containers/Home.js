import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Post from '../components/Post';
import * as threadActions from '../core/actions/thread';

class HomeContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      isReady: false,
    };

    this.showComments = (postId) => {
      this.props.history.go(`/${this.props.searchTerm}/${postId}`);
    };
  }

  componentWillMount() {
    const slug = this.props.match.params ? this.props.match.params.slug : null;

    if (slug) {
      this.props.dispatch(new threadActions.getThread(slug));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { slug } = nextProps.match.params;
    if (slug) {
      if (slug !== this.props.match.params.slug) {
        this.props.dispatch(new threadActions.getThread(slug));
      }
    }
  }

  render() {
    if (this.props.match.params.slug === undefined) {
      return <div className="alert alert-warning">{'Enter reddit thread name to search!'}</div>;
    }
    if (this.props.posts.length <= 0) {
      return <div className="alert alert-danger">{'Sorry, nothing found for your search!'}</div>;
    }
    return (
      <div className="list-group">
        {this.props.posts.map(post => (
          <Post
            onCommentClick={this.showComments}
            term={this.props.searchTerm}
            key={post.data.id}
            {...post.data}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const props = {
    searchTerm: state.thread.threadSlug,
    posts: state.thread.posts,
    isLoading: state.thread.isLoading,
  };
  return props;
};

const Home = withRouter(connect(mapStateToProps)(HomeContainer));

export default Home;
