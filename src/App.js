import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import {ButtonState} from './Types/ButtonState'

class App extends Component {
  state = {
    username: 'robertorob',
    showPersons: false,
    persons: [
      {id: 1, name: 'John', age: 28},
      {id: 2, name: 'Max', age: 23}, 
      {id: 3, name: 'Stephanie', age: 18}
    ],
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  togglePersonsHandler = () => {
    let {showPersons} = this.state;
    this.setState({
      showPersons: !showPersons,
    });
  }
  
  nameChangedHandler = (e, id) => {
    const name = e.target.value;
    let persons = [...this.state.persons];
    const newPersons = persons.map(f => {
      if(f.id === id)
      f.name = name;
      return f;
    });
    this.setState({persons: newPersons});
  }
  
  deletePersonHandler = (id) => {
    let persons = [...this.state.persons];
    const newPersons = persons.filter(f => f.id !== id);
    this.setState({persons: newPersons});
  }

  deleteCharHandler = (index) => {
    let chars = this.state.username.split('');
    chars.splice(index, 1);
    this.setState({
      username: chars.join('')
    })
  }

  render() {
    let persons = null;
    let buttonClassName = 'background-green';
    if (this.state.showPersons) {
      buttonClassName = 'background-red';
      persons = (
        <div>
          {this.state.persons.map(f => <Person id={f.id} key={f.id} name={f.name} age={f.age} deleteHandler={this.deletePersonHandler} nameChangedHandler={this.nameChangedHandler}/>)}
        </div>
      );
    }

    // Здесь передаём в deleteCharHandler параметр index сразу, используя лямбда выражение.
    // Выше в deleteHandler={this.deletePersonHandler} мы передаём только обработчик, 
    // а внутри компонента мы передаём в обработчик лямбду, и уже там достаём из пропсов нужный параметр
    const charList = this.state.username.split('').map((f, index) => <Char character={f} key={index} click={() => this.deleteCharHandler(index)} />);

    return (
      <div className="App">
        <div className='app-content'>
          <div className='username-section'>
            <h3>{this.state.username}</h3>
            <p style={{'marginBottom':'5px'}}>The header is my username. If you type it in the below input, it will be passed from the child component</p>
            <UserInput changed={this.usernameChangedHandler} username={this.state.username} />
            <Validation inputLength={this.state.username.length} minLength={5} maxLength={15} />
            {charList}
            <div className='margin-top-bottom-15'>
              <p>This is the list in the parent component</p>
              <ul>
                {this.state.persons.map(f => <li key={f.id}>{f.name}</li>)}
              </ul>
            </div>
          </div>
          <div className='toggle-button-div'>
            <button className={`toggle-button ${buttonClassName}`} onClick={this.togglePersonsHandler}>Toggle</button>
          </div>
          <div>
            {persons}
          </div>
        </div>
      </div>
    );

    // The code above is compiled into something like this. That's why we need to import React from 'react' module
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null,  'Hello'));
  }
}

export default App;
