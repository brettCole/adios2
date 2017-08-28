import React, { Component } from 'react';
import { Navbar, NavLink, Container } from 'reactstrap';
require('../components/Register.css');

class Homepage extends Component {

  render() {
    return(
      <Container className='homepage_background mw-100'>
        <h1 className='title'>Adíos</h1>
        <Navbar className='flex-cloumn fixed-bottom'>
          <NavLink href='../components/Register' className='nav_link p-2'>Register with Adios</NavLink>
          <NavLink href='../components/Login' className='nav_link p-2'>Login to Adios</NavLink>
        </Navbar>
      </Container>
    )
  }
}

export default Homepage;