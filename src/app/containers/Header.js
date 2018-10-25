import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';

class HeaderContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
    this.search = (e) => {
      e.preventDefault();
      this.props.history.push(`/${this.state.searchTerm}`);
    };

    this.onChangeSearchBox = (e) => {
      this.setState({ searchTerm: e.currentTarget.value });
    };
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="/">
					Reddit Threads
        </a>
        <div className="collapse navbar-collapse pull-lg-right" id="navbarsExampleDefault">
          <SearchForm
            onChangeSearchText={this.onChangeSearchBox}
            term={this.props.term}
            onSearch={this.search}
          />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.thread.threadSlug });

const Header = withRouter(connect(mapStateToProps)(HeaderContainer));
export default Header;
