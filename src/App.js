import React, { Component } from 'react';
import ClickCounter from './ClickCounter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter Caption='First' />
        <ClickCounter Caption='Second' />
        <ClickCounter Caption='Third' />
      </div>
    );
  }
}

export default App;
