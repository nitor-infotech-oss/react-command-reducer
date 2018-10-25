import React from 'react';

const SearchForm = props => (
  <form className="form-inline my-2 my-lg-0" onSubmit={props.onSearch}>
    <input
      name="searchBox"
      id="search-box"
      className="form-control mr-sm-2"
      type="text"
      onChange={props.onChangeSearchText}
      placeholder="Search Thread"
    />
    <button className="btn btn-outline-success my-2 my-sm-0" onClick={props.onSearch} type="button">
      {'Search'}
    </button>
  </form>
);

export default SearchForm;
