import React, { Component } from 'react';
import ChecklistName from '../components/ChecklistName';
require ('isomorphic-fetch');

class EachChecklistContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checklists: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/checklists', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ checklists: data })
    }
    );
  }

  render() {
    return (
      <ChecklistName 
        checklists = { this.state.checklists }
      />
    )
  }
}

export default EachChecklistContainer;