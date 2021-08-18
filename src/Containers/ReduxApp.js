import React from 'react';
import FetchedPosts from '../Posts/FetchedPosts';
import PostForm from '../Posts/PostForm';
import Posts from '../Posts/Posts';
import { useSelector } from 'react-redux';
import Alert from '../components/alert';

const ReduxApp = () => {
  const alerts = useSelector(state => state.app.alerts);

  return (
    <div className='container'>
      {alerts.map(alert => <Alert alert={alert}/>)}
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row mt-3'>
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