import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { CommentType } from '../../types/CommentType';

type Props = {
  comments: CommentType[] | undefined,
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <div className="CommentList">
    {comments.length === 0
      ? <p>There are no comments yet</p>
      : comments.map(oneComment => <CommentInfo key={oneComment.id} comment={oneComment} />)}
  </div>
);
