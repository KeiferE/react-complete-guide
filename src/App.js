import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <Person name="Max" age="28"/>
        <Person name="Maun" age="29"/>
        <Person name="Steph" age="32">My Hobbies: Racing</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!! '));
  }
}

export default App;
