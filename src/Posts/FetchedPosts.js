import React from 'react';
import Post from './Post';

export default ({posts}) => {
  if (!posts || !posts.length) 
    return <button className='btn btn-primary'>Upload</button>

    return posts.map(post => <Post post={post} key={post.id} />);
}