import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import Adios from '../components/Adios';
import UserLinkOptions from '../components/UserLinkOptions';

class Navigation extends Component {

  render() {
    return (
      <Navbar className='sticky-top d-flex flex-row' color='faded' light>
        <NavbarBrand className='mr-auto' href='/'><Adios /></NavbarBrand>
        <Nav className='d-inline-flex flex-row' navbar>   
          <NavItem className='mr-5 mt-2'>
            <NavLink className='d-inline align-bottom' href='/'>Find a Rental</NavLink>
          </NavItem>
          <NavItem className='ml-1 mr-3 mt-2'>
            {!this.props.isLoggedIn ? ( 
              <NavLink className='d-inline text-bottom' href='/login'>Login</NavLink>
             ) : (
              <UserLinkOptions className='mt-0'  />
             )}
          </NavItem>
        </Nav>
      </Navbar>
    );  
  } 
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.loginStatus.isLoggedIn }
}

export default connect(mapStateToProps)(Navigation); 