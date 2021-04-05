import React from 'react';

const Char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '15px',
    margin: '15px',
    border: '1px solid black',
    textAlign: 'center'
  };

  return (
    <div style={style} onClick={props.click}>
      {props.character}
    </div>
  );
}

export default Char;