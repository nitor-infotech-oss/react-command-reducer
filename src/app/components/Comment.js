import React from 'react';

const Reply = (props) => {
  if (props.reply.data.ups === undefined) return null;
  const replyDate = new Date(1000 * props.reply.data.created).toUTCString();
  return (
    <div className="alert text-left border-top-0">
      <small>&#187;</small>
      {' reply from '}
      <a href="">{props.reply.data.author}</a>
      {' on ['}
      <small>{replyDate}</small>
      {'] '}
      <span className="badge badge-pill badge-success">{`${props.reply.data.ups}`}</span>{' '}
      <span className="badge badge-pill badge-danger">{`${props.reply.data.downs}`}</span>
      <p />
      {props.reply.data.body}
      {props.reply.data.replies.data
        ? props.reply.data.replies.data.children.map((reply, index) => (
          <Reply key={index} counter={`${props.counter}-${index + 1}`} reply={reply} />
        ))
        : null}
    </div>
  );
};

const Comment = (props) => {
  const { comment } = props;
  if (comment.data.ups === undefined) return null;
  const commentDate = new Date(1000 * comment.data.created).toUTCString();
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="lead text-left">
          <span className="badge badge-pill badge-success">{`${comment.data.ups}`}</span>{' '}
          <span className="badge badge-pill badge-danger">{`${comment.data.downs}`}</span>{' '}
          <a href="">{`${comment.data.author} `}</a>
          {' on '}
          <small>{commentDate}</small>
          <p />
          <small>
            <strong>{comment.data.body}</strong>
          </small>
        </div>
        {comment.data.replies
          ? comment.data.replies.data.children.map((reply, index) => (
            <Reply key={index} counter={index + 1} reply={reply} />
          ))
          : null}
      </div>
    </div>
  );
};

export default Comment;
