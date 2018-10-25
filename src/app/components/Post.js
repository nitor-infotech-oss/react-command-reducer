import React from 'react';
import { NavLink } from 'react-router-dom';
import UIHelpers from '../utils/ui-helpers';

const styles = {
  thumb: {
    height: 50,
    width: 50,
  },
};

const Post = (props) => {
  const authorProfileUrl = `https://www.reddit.com/user/${props.author}`;

  return (
    <div key={props.id} className="list-group-item list-group-item-action">
      <div className="container">
        <div className="row">
          <div className="col-lg-1">
            <img
              src={UIHelpers.getThumbUrl(props.preview, props.author)}
              className="border border-info rounded-circle border-2"
              style={styles.thumb}
              alt={props.author}
            />
          </div>
          <div className="col-lg-9">
            <blockquote className="blockquote text-center">
              <p className="mb-0 text-left">
                <a href={props.url} target="_blank">
                  <strong>{props.title}</strong>
                </a>{' '}
                <abbr title={`${props.domain} - ${props.url}`}>
                  <small>{`${props.domain}`}</small>
                </abbr>
              </p>
              <footer className="text-left">
                <small className="text-muted">
                  <span className="badge badge-danger">{`${props.num_comments}`}</span>{' '}
                  <NavLink to={`/${props.term}/${props.id}`}>{'Comments'}</NavLink>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="col-lg-2 text-right">
            <small className="text-muted">
              {'by '}
              <a href={authorProfileUrl} target="_blank">
                {` ${props.author}`}
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
