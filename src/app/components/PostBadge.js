import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ text, color }) => (
  <span className={`badge badge-pill ${color}`}>{text}</span>
);

Badge.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

const SortSelect = ({ num_comments, ups, downs }) => (
  <p>
    <Badge color="badge-primary" text={`${num_comments} Comments `} />
    <Badge color="badge-success" text={`${ups} Ups `} />
    <Badge color="badge-danger" text={`${downs} Downs`} />
  </p>
);

SortSelect.propTypes = {
  num_comments: PropTypes.number,
  ups: PropTypes.number,
  downs: PropTypes.number,
};

export default SortSelect;
