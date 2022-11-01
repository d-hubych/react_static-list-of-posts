import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { PostType } from '../../types/PostType';

type Props = {
  allPosts: PostType[],
};

export const PostList: React.FC<Props> = ({ allPosts }) => (
  <div className="PostList">
    {allPosts.map(onePost => <PostInfo key={onePost.id} post={onePost} />)}
  </div>
);
