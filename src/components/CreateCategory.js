import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import { EntypoPlus } from 'react-entypo';

class CreateCategory extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <Container className='w-100 d-flex justify-content-center mt-3'>
        <Button className='w-25 d-flex justify-content-center align-items-center'>
          <EntypoPlus /><p className='mb-0'>Create Category</p>
        </Button>
      </Container>
    );
  }
}

export default CreateCategory;