import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SignupForm from './components/form/SignupForm';
import Homepage from './containers/Homepage'
import LoginForm from './components/form/LoginForm'
import SearchResultsPage from './containers/SearchResultsPage'
import ChecklistContainer from './containers/ChecklistContainer'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Route exact path='/' component={Homepage} />
            <Route path='/signup' component={SignupForm} />
            <Route path='/login' component={LoginForm} />
            <Route path='/checklist' component={ChecklistContainer} />
            <Route path='/search_results' component={SearchResultsPage} />
          </div>
      </Router>
    );
  }
}

export default App;
