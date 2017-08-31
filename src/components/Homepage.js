import React from 'react';
import { Container, Button } from 'reactstrap';
require('../components/Register.css');

const Homepage = () => {
  return(
    <Container className='homepage_background w-100 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='title mb-auto p-2'>Adíos</h1>
      <div className='d-flex flex-column justify-content-center align-items-center m-2'>
        <Button outline color='secondary' className='m-1 w-100'>Register with Adíos</Button>{' '}
        <Button outline color='secondary' className='m-1 w-100'>Login to Adíos</Button>
      </div>
    </Container>
  )
}

export default Homepage;