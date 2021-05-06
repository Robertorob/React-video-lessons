import React, { Component } from 'react';
import './App.css';
import PersonsCards from './PersonsCards'

class App extends Component {
  render() {
    return (
      <PersonsCards />
    );

    // The code above is compiled into something like this. That's why we need to import React from 'react' module
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null,  'Hello'));
  }
}

export default App;
