import React from 'react';
import PropTypes from 'prop-types';

const sortOrders = [
  {
    key: 'ASC',
    title: 'Ascending',
  },
  {
    key: 'DESC',
    title: 'Descending',
  },
];

const sortFields = [
  {
    field: 'ups',
    title: 'Up Votes',
  },
  {
    field: 'downs',
    title: 'Down Votes',
  },
  {
    field: 'created_utc',
    title: 'Time',
  },
];

const applySort = callBack => ({ currentTarget: { value } }) => {
  const sortValue = value.split('-');
  const sortField = sortValue[0];
  const sortOrder = sortValue[1];
  callBack({ sortField, sortOrder });
};

const SortSelect = ({ onSort }) => (
  <select className="form-control" onChange={applySort(onSort)}>
    <option>Sort Comments</option>
    {sortFields.map(sortField =>
      sortOrders.map(sortOrder => (
        <option
          key={`${sortField.field}-${sortOrder.key}`}
          value={`${sortField.field}-${sortOrder.key}`}
        >
          {`${sortField.title} ${sortOrder.title}`}
        </option>
      )),
    )}
  </select>
);

SortSelect.propTypes = {
  onSort: PropTypes.func,
};

export default SortSelect;
