import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAlert } from '../redux/actions';

const Alert = ({alert}) => {
  const dispatch = useDispatch();

  const deleteAlertHandler = () => {
    dispatch(deleteAlert(alert.id))
  }

  return (
    <div 
      className="alert alert-danger" 
      role="alert" 
      style={{
        'display':'flex', 
        'flexDirection':'row', 
        'justifyContent': 'space-between', 
        'alignItems': 'center', 
        'paddingTop': '3px',
        'paddingBottom': '3px',
    }}>
      <span>{alert.text}</span>
      <button
        onClick={deleteAlertHandler}
        type="button" 
        className="btn"
        style={{
          'paddingTop': '0',
          'paddingBottom': '0',
      }}>
        <span style={{'fontSize': '20pt', 'fontFamily': 'initial'}}>&times;</span>
      </button>
    </div>
  );
}

export default Alert;