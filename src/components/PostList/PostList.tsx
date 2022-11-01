import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { postType } from '../../types/postType';

type Props = {
  allPosts: postType[],
};

export const PostList: React.FC<Props> = (allPosts) => (
  <div className="PostList">
    {allPosts.map(onePost => <PostInfo key={onePost.id} {...onePost} />)}
  </div>
);
