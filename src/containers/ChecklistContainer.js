import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CreateCategory from '../components/CreateCategory'
import CategoryItem from '../components/CategoryItem'
import Navigation from './Navigation'

class ChecklistContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container className='w-100 p-0'>
        <Navigation />
        <CreateCategory />
        <Container className='w-100 d-flex justify-content-center col-6'>
          <CategoryItem />
        </Container>
      </Container>
    )
  }
}

export default ChecklistContainer;