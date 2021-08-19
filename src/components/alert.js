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
        'flex-direction':'row', 
        'justify-content': 'space-between', 
        'align-items': 'center', 
        'padding-top': '3px',
        'padding-bottom': '3px',
    }}>
      <span>{alert.text}</span>
      <button
        onClick={deleteAlertHandler}
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