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
      <div className='row'>
        <div className='col'>
          <Posts posts={posts} />
        </div>
        <div className='col'>
          <FetchedPosts />
        </div>
      </div>
    </div>
  )
}

export default ReduxApp;