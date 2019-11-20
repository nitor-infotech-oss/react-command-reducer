import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import UIHelpers from '../utils/ui-helpers';

const styles = {
  thumb: {
    height: 50,
    width: 50,
  },
};

const Post = ({
  id,
  preview,
  author,
  url,
  title,
  domain,
  num_comments,
  term,
}) => {
  const authorProfileUrl = `https://www.reddit.com/user/${author}`;

  return (
    <div key={id} className="list-group-item list-group-item-action">
      <div className="container">
        <div className="row">
          <div className="col-lg-1">
            <img
              src={UIHelpers.getThumbUrl(preview, author)}
              className="border border-info rounded-circle border-2"
              style={styles.thumb}
              alt={author}
            />
          </div>
          <div className="col-lg-9">
            <blockquote className="blockquote text-center">
              <p className="mb-0 text-left">
                <a href={url} rel="noopener noreferrer" target="_blank">
                  <strong>{title}</strong>
                </a>
                {' '}
                <abbr title={`${domain} - ${url}`}>
                  <small>{`${domain}`}</small>
                </abbr>
              </p>
              <footer className="text-left">
                <small className="text-muted">
                  <span className="badge badge-danger">{`${num_comments}`}</span>
                  {' '}
                  <NavLink to={`/${term}/${id}`}>Comments</NavLink>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="col-lg-2 text-right">
            <small className="text-muted">
              by
              <a
                href={authorProfileUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {` ${author}`}
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.string,
  preview: PropTypes.object,
  author: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  domain: PropTypes.string,
  num_comments: PropTypes.number,
  term: PropTypes.string,
};

export default Post;
