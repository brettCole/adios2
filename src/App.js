import React, { Component } from 'react';
import './App.css';

import Homepage from './containers/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App mw-100">
        <Homepage />
      </div>
    );
  }
}

export default App;
