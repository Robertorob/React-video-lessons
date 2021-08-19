import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchPostsWithError } from '../redux/actions';
import {Spinner} from '../components/spinner';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);
  
  const uploadHandler = () => {
    dispatch(fetchPosts());
  }
  const simulateError = () => {
    dispatch(fetchPostsWithError());
  }

  if (loading) 
    return <Spinner />;

  if (!posts || !posts.length) 
    return (
      <div style={{'display': 'flex', 'justifyContent':'flex-start'}}>
        <button onClick={uploadHandler} className='btn btn-primary'>Upload</button>
        <span>&nbsp;</span>
        <button onClick={simulateError} className='btn btn-primary'>Error</button>
      </div>
    )

  return posts.map(post => <Post post={post} key={post.id} />);
}