import React from 'react';
import FetchedPosts from '../Posts/FetchedPosts';
import PostForm from '../Posts/PostForm';
import Posts from '../Posts/Posts';

const ReduxApp = () => {
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
          <Posts />
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