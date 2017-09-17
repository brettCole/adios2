import React from 'react';
import { Container, Button } from 'reactstrap';
require('../components/Register.css');

const Homepage = () => {
  return(
    <Container className='homepage_background w-100 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='title mb-auto p-2'>Adíos</h1>
      <div className='d-flex flex-column justify-content-center align-items-center m-2'>
        <Button outline color='secondary' className= 'm-1 mb-3 w-100 font-weight-bold'>Have a Look Around First</Button>
        <Button outline color='secondary' className='home_buttons m-1 w-100 font-weight-bold'>Register with Adíos</Button>
        <Button outline color='secondary' className='home_buttons m-1 w-100 font-weight-bold'>Login to Adíos</Button>
      </div>
    </Container>
  )
}

export default Homepage;