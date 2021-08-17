import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import {Spinner} from '../components/spinner';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);
  
  const uploadHandler = () => {
    dispatch(fetchPosts());
  }

  if (loading) 
    return <Spinner />;

  if (!posts || !posts.length) 
    return <button onClick={uploadHandler} className='btn btn-primary'>Upload</button>

  return posts.map(post => <Post post={post} key={post.id} />);
}