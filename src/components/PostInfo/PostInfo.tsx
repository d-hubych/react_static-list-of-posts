import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { PostType } from '../../types/PostType';

type Props = {
  post: PostType,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    body,
    commentsOfPost,
    title,
    userOfPost,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        <p>
          {' Posted by  '}
          <a className="UserInfo" href={userOfPost?.email}>
            {userOfPost?.username}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      <CommentList comments={commentsOfPost} />
    </div>
  );
};
