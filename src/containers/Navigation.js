import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import Adios from '../components/Adios'
import UserLinkOptions from '../components/UserLinkOptions'

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <Navbar className='sticky-top d-flex flex-row' color='faded' light>
        <NavbarBrand className='mr-auto'><Adios /></NavbarBrand>
        <Nav className='d-inline-flex flex-row' navbar>      
          <NavItem className='mr-5 mt-2'>
            <NavLink className='d-inline align-bottom' href='#'>Find a Rental</NavLink>
          </NavItem>
          <NavItem className='ml-1 mr-3 mt-2'>
            {!isLoggedIn ? (
              <NavLink className='d-inline text-bottom' href='/components/Signin'>Login</NavLink>
            ) : (
              <UserLinkOptions nav />
            )}
          </NavItem>
        </Nav>
      </Navbar>
    );  
  }
}

export default Navigation;