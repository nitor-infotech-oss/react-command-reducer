import React from 'react';

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

const SortSelect = (props) => {
  this.onSort = (e) => {
    const sortValue = e.currentTarget.value.split('-');
    const sortField = sortValue[0];
    const sortOrder = sortValue[1];
    props.onSort({ sortField, sortOrder });
  };

  return (
    <select className="form-control" onChange={this.onSort}>
      <option>Sort Comments</option>
      {sortFields.map((sortField, fieldIndex) =>
        sortOrders.map((sortOrder, sortIndex) => (
          <option key={`${fieldIndex}-${sortIndex}`} value={`${sortField.field}-${sortOrder.key}`}>
            {`${sortField.title} ${sortOrder.title}`}
          </option>
        )),
      )}
    </select>
  );
};

export default SortSelect;
