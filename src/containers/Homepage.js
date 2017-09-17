import React from 'react';
import { Container, Button } from 'reactstrap';
import Navigation from './Navigation'
import Search from '../components/Search'
require('../components/Register.css');

const Homepage = () => {
  return(
    <Container className='w-100 display-height p-0'>
      <Navigation />
      <Container className='d-flex align-items-center w-100 search-height homepage_background_3'>
        <Search />
      </Container>
    </Container>
  )
}

export default Homepage;