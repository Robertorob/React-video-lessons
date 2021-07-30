import React from 'react';
import FetchedPosts from '../Posts/FetchedPosts';
import PostForm from '../Posts/PostForm';
import Posts from '../Posts/Posts';

const ReduxApp = () => {

  const posts = [
    {title: 'post 1', id: 1},
    {title: 'post 2', id: 2},
    {title: 'post 3', id: 3},
  ];

  return (
    <div className='container pt-3'> 
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col'>
          <h3>Posts</h3>
          <Posts posts={posts} />
        </div>
        <div className='col'>
          <h3>Async posts</h3>
          <FetchedPosts />
        </div>
      </div>
    </div>
  )
}

export default ReduxApp;