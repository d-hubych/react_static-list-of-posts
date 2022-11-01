import React from 'react';
import { PostList } from './components/PostList/PostList';
import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

const preparedPosts = postsFromServer.map(post => {
  const userOfPost = usersFromServer.find(user => user.id === post.userId);
  const commentsOfPost = commentsFromServer.filter(comment => comment.postId === post.id);

  return { ...post, userOfPost, commentsOfPost };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList {...preparedPosts} />
  </section>
);
