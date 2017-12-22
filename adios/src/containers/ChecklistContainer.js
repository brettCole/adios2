import React from 'react';
import { Container } from 'reactstrap';
import CreateChecklist from '../components/CreateChecklist'
import EachChecklistContainer from './EachChecklistContainer'
import Navigation from './Navigation'

const ChecklistContainer = () => {
  return (
    <Container className='w-100 p-0'>
      <Navigation />
      <CreateChecklist />
      <EachChecklistContainer />
    </Container>
  )
}

export default ChecklistContainer; 