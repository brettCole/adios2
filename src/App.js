import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Register />
        <Login />
      </div>
    );
  }
}

export default App;
