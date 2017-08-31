import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar className='rounded' color='faded' light>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse className='navbar-toggleable-md' isOpen={!this.state.collapsed}>
            <Nav navbar>
              <NavItem>
                <NavLink href='/components/Signup'>Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/components/Signin'>Signin</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );  
  }
}

export default Navigation;