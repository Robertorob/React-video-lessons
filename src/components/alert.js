import React from 'react';

const Alert = ({text}) => {
  return (
    <div 
      className="alert alert-danger" 
      role="alert" 
      style={{
        'display':'flex', 
        'flex-direction':'row', 
        'justify-content': 'space-between', 
        'align-items': 'center', 
        'padding-top': '3px',
        'padding-bottom': '3px',
    }}>
      <span>{text}</span>
      <button 
        type="button" 
        className="btn"
        style={{
          'padding-top': '0',
          'padding-bottom': '0',
      }}>
        <span style={{'font-size': '20pt', 'font-family': 'initial'}}>&times;</span>
      </button>
    </div>
  );
}

export default Alert;