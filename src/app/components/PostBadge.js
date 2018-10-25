import React from 'react';

const Badge = ({ text, color }) => <span className={`badge badge-pill ${color}`}>{text}</span>;

const SortSelect = ({ num_comments, ups, downs }) => (
  <p>
    <Badge color="badge-primary" text={`${num_comments} Comments`} /> {' '}
    <Badge color="badge-success" text={`${ups} Ups`} /> {' '}
    <Badge color="badge-danger" text={`${downs} Downs`} />
  </p>
);

export default SortSelect;
