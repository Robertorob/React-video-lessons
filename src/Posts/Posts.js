import React from 'react';
import Post from './Post';
import {connect} from 'react-redux';

const Posts = ({ syncPosts }) => {
  if (!syncPosts || !syncPosts.length) 
    return <p>There are no posts yet</p>;
    
  return syncPosts.map(post => <Post post={post} key={post.id} />);
}

const mapStateToProps = state => {
  return {
    syncPosts: state.posts.syncPosts
  }
};

export default connect(mapStateToProps, null)(Posts);