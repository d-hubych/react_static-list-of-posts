import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { commentType } from '../../types/commentType';

type Props = {
  comments: commentType[] | undefined,
};

export const CommentList: React.FC<Props> = (comments) => (
  <div className="CommentList">
    {comments.map(oneComment => <CommentInfo key={oneComment.id} {...oneComment} />)}
  </div>
);
