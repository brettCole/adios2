import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CreateChecklist from '../components/CreateChecklist'
import ChecklistItem from '../components/ChecklistItem'
import EachChecklistContainer from './EachChecklistContainer'
import Navigation from './Navigation'

class ChecklistContainer extends Component {

  render() {
    return (
      <Container className='w-100 p-0'>
        <Navigation />
        <CreateChecklist />
        <EachChecklistContainer />
      </Container>
    )
  }
}

export default ChecklistContainer; 