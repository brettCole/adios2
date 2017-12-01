import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChecklistName from '../components/ChecklistName';
import { receiveChecklists } from '../actions/createChecklist';
require ('isomorphic-fetch');

class EachChecklistContainer extends Component {
  componentDidMount() {
    if (JSON.parse(localStorage.getItem('user')) === null) {
      window.location.replace('http://localhost:3000/login')
    }
    fetch(`http://localhost:3001/api/v1/checklists?user_id=${JSON.parse(localStorage.getItem('user')).id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      }
    })
    .then(response => response.json())
    .then(lists => {
      this.props.receiveChecklists(lists);
    });
  }

  render() {
    return (
      <ChecklistName />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ receiveChecklists }, dispatch);
}

export default connect(null, mapDispatchToProps)(EachChecklistContainer);