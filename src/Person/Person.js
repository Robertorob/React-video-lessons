import React, { useState } from 'react';
import './Person.css';

const person = (props) => {

  let [name, setName] = useState(props.name);

  const changeNameHandler = (e) => {
    setName(e.target.value);
    props.nameChangedHandler(e, props.id)
  }

  return (
  <div className='person-card'>
    <div className='margin-sides-15'>
      <h3>{name}</h3>
      <p>I'm a {name} and I'm {props.age} years old</p>
      <label>Type my name: </label>
      <input 
        style={{'display':'block', 'marginTop':'5px', 'marginBottom':'15px'}} 
        type='text' 
        onChange={changeNameHandler} 
        placeholder='type my name'
        value={name} />
      <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
    </div>
    <div className='person-card'>
      <span>This is my children</span>
      <div>{props.children}</div>
    </div>
  </div>
  )
};



export default person;