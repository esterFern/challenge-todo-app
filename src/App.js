import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          TO DO LIST
        </header>

        <List></List>
      </div>
    );
  }
}

export default App;
