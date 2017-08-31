import React, { Component } from 'react';
import './App.css';
import SignupForm from './components/form/SignupForm'
import Homepage from './components/Homepage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SignupForm />
      </div>
    );
  }
}

export default App;
