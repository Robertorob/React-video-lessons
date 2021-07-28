import React from 'react';
import Post from './Post';

export default ({ posts }) => {
  if (!posts || !posts.length) 
    return <p>There are no posts yet</p>;
  return posts.map(post => <Post post={post} key={post.id} />);
}