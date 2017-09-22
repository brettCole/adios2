import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
// import SignupForm from './components/form/SignupForm'
// import Search from './components/Search'
// import Homepage from './containers/Homepage'
import LoginForm from './components/form/LoginForm'
// import Navigation from './containers/Navigation'
// import CheckListLink from './components/CheckListLink'
// import FlipKey from './components/Flipkey'
// import Footer from './components/Footer'




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <LoginForm />
        </div>
      </Router>
    );
  }
}

export default App;
