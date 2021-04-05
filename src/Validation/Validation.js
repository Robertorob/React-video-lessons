import React from 'react';

const validationFailed = (props) => props.inputLength < props.minLength || props.inputLength > props.maxLength;

const Validation = (props) => {

  let message = null;
  if(props.inputLength < props.minLength) {
    message = 'short';
  }
  if(props.inputLength > props.maxLength) {
    message = 'long';
  }

  return (
    validationFailed(props) &&
    <div style={{'color':'red', 'marginTop':'4px'}}>
      <p>Username is too {message}!</p>
    </div>
  );
}

export default Validation;