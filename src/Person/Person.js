import React, { useState } from 'react';
import './Person.css';

const person = (props) => {

  let [name, setName] = useState(props.person.name);

  const changeNameHandler = (e) => {
    setName(e.target.value);
    props.nameChangedHandler(e, props.person.id)
  }

  return (
  <div className='person-card' 
    onMouseEnter={() =>props.mouseEnterHandler(props.index)} 
    onMouseLeave={() => props.mouseLeaveHandler(props.index)}>
    <div className='margin-sides-15'>
      <h3>{name}</h3>
      <p>I'm a {name} and I'm {props.person.age} years old</p>
      <label>Type my name: </label>
      <input 
        style={{'display':'block', 'marginTop':'5px', 'marginBottom':'15px'}} 
        type='text' 
        onChange={changeNameHandler} 
        placeholder='type my name'
        value={name} />
      <button onClick={() => props.deleteHandler(props.person.id)}>Delete</button>
    </div>
    <div className='person-card'>
      <span>This is my children</span>
      <div>{props.children}</div>
    </div>
  </div>
  )
};



export default person;