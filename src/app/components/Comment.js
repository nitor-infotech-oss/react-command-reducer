import React from 'react';
import T from 'prop-types';

const Reply = ({ reply, counter }) => {
  const { ups, created, author, downs, body, replies } = reply.data;

  if (ups === undefined) return null;
  const replyDate = new Date(1000 * created).toUTCString();
  return (
    <div className="alert text-left border-top-0">
      <small>&#187;</small>
      reply from
      <button type="button" className="btn-link">
        {author}
      </button>
      on [
      <small>{replyDate}</small>
]
      <span className="badge badge-pill badge-success">{`${ups} `}</span>
      <span className="badge badge-pill badge-danger">{`${downs}`}</span>
      <p />
      {body}
      {replies.data
        ? replies.data.children.map((nestedReply, index) => (
          <Reply
            key={`${nestedReply.parent_id}-${nestedReply.id}`}
            counter={`${counter}-${index + 1}`}
            reply={nestedReply}
          />
          ))
        : null}
    </div>
  );
};

Reply.propTypes = {
  reply: T.object,
  counter: T.oneOfType([T.number, T.string]),
};

const Comment = ({ comment }) => {
  if (comment.data.ups === undefined) return null;
  const commentDate = new Date(1000 * comment.data.created).toUTCString();
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="lead text-left">
          <span className="badge badge-pill badge-success">{`${comment.data.ups} `}</span>
          <span className="badge badge-pill badge-danger">{`${comment.data.downs} `}</span>
          <button className="btn-link" type="button">
            {`${comment.data.author} `}
          </button>
          on
          <small>{commentDate}</small>
          <p />
          <small>
            <strong>{comment.data.body}</strong>
          </small>
        </div>
        {comment.data.replies
          ? comment.data.replies.data.children.map((reply, index) => (
            <Reply
              key={`${reply.parent_id}-${reply.id}`}
              counter={index + 1}
              reply={reply}
            />
            ))
          : null}
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: T.object,
};

export default Comment;
