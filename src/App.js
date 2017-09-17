import React, { Component } from 'react';
import './App.css';
// import SignupForm from './components/form/SignupForm'
// import Search from './components/Search'
import Homepage from './containers/Homepage'
// import Navigation from './containers/Navigation'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
