import React from 'react';

const UserOutput = (props) => {
  return (
    <div className='person-card'>
      <p>Randwom text with my name: {props.userName}</p>
      <p>Second text</p>
    </div>
  );
}

export default UserOutput;