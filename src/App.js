import React, { Component } from 'react';
import './App.css';

import Person from './person/person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
      </div>
    );
  }
}

export default App;
