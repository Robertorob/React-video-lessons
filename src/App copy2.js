import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const app = (props) => { 
  const [ personsState, setPersonsState ] = useState(
    {
      persons: [ 
        {
          name: 'Robert', age: 26
        },
        {
          name: 'Olga', age: 24
        },
        {
          name: 'Olga\'s sun', age: 5
        }
      ],     
      otherState: "some other value"
    })

  const [separateState, setSeparateState] = useState("separate state");
  console.log(personsState, separateState);
    
  const switchNameHandler = (name, age) => {
    console.log('was clicked');
    setPersonsState(
      { persons:  [
          {
            name: name, age: age
          },
          {
            name: name, age: age
          },
          {
            name: personsState.persons[2].name, age: personsState.persons[2].age
          }
        ],
        otherState: personsState.otherState
      })
  }

  const nameChangedhandler = (e) => {
    const newName = e.target.value;
    setPersonsState(
      { persons:  [
          {
            name: newName, age: personsState.persons[0].age
          },
          {
            name: newName, age: personsState.persons[1].age
          },
          {
            name: personsState.persons[2].name, age: personsState.persons[2].age
          }
        ],
        otherState: personsState.otherState
      })
  }
  const sunsHandler = (e) => {
    const newName = e.target.value;
    setPersonsState(
      { persons:  [
          {
            name: personsState.persons[0].name, age: personsState.persons[0].age
          },
          {
            name: personsState.persons[1].name, age: personsState.persons[1].age
          },
          {
            name: newName, age: personsState.persons[2].age
          }
        ],
        otherState: personsState.otherState
      })
  }

  const buttonStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <div className='app-content'>
        <div className='margin-20'>
          <h1>Header</h1>
          <button style={buttonStyle} onClick={switchNameHandler.bind(this, "Robertorob", 26)}>Switch Name</button>
        </div>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
          click={() => switchNameHandler("Gagagagaga", 34)}
          change={nameChangedhandler}
          >This is child elements of Person class</Person>
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          change={nameChangedhandler}
        >
          <Person 
            name={personsState.persons[2].name} 
            age={personsState.persons[2].age}
            change={sunsHandler}
          />
        </Person>
      </div>
      <div className='app-content' style={{'margin-top': '20px'}}>
        <UserInput />
        <UserOutput userName='Robertorob' />
      </div>
    </div>
  );
}

export default app;
