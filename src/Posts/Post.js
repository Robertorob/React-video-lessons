import React from 'react';

export default ({ post }) => {
  return (
    <div className='card mt-2'>
      <div className='card-body'>
        <h5 className='card-title'><b>{post.title}</b></h5>
        <p className='card-text'>{post.body}</p>
      </div>
    </div>
  );
}