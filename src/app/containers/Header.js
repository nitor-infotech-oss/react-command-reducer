import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';

const HeaderContainer = ({ history, term }) => {
  const [searchTerm, setSearchTerm] = useState(term);

  const search = e => {
    e.preventDefault();
    history.push(`/${searchTerm}`);
  };

  const onChangeSearchBox = ({ currentTarget: { value } }) => {
    setSearchTerm(value);
  };

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
      <div
        className="collapse navbar-collapse pull-lg-right"
        id="navbarsExampleDefault"
      >
        <SearchForm
          onChangeSearchText={onChangeSearchBox}
          term={searchTerm}
          onSearch={search}
        />
      </div>
    </nav>
  );
};

HeaderContainer.propTypes = {
  history: PropTypes.object,
  term: PropTypes.string,
};

const mapStateToProps = state => ({ term: state.thread.threadSlug });

const Header = withRouter(connect(mapStateToProps)(HeaderContainer));
export default Header;
