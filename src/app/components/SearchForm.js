import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onChangeSearchText, onSearch, term }) => (
  <form className="form-inline my-2 my-lg-0" onSubmit={onSearch}>
    <input
      name="searchBox"
      id="search-box"
      className="form-control mr-sm-2"
      type="text"
      onChange={onChangeSearchText}
      placeholder="Search Thread"
      value={term}
    />
    <button
      className="btn btn-outline-success my-2 my-sm-0"
      onClick={onSearch}
      type="button"
    >
      Search
    </button>
  </form>
);

SearchForm.propTypes = {
  onChangeSearchText: PropTypes.func,
  onSearch: PropTypes.func,
  term: PropTypes.string,
};

export default SearchForm;
