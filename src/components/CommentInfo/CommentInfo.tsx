import React from 'react';
import { commentType } from '../../types/commentType';

// type Props = {
//   comment: commentType
// };

export const CommentInfo: React.FC<commentType> = ({ body, email, name }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{name}</strong>
      {' by '}
      <a
        className="CommentInfo__email"
        href={email}
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {body}
    </div>
  </div>
);
