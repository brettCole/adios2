import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CreateCategory from '../components/CreateCategory'

class ChecklistContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container className = 'w-100'>
        <CreateCategory />
      </Container>
    )
  }
}

export default ChecklistContainer;