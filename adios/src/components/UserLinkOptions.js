import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/login'

class UserLinkOptions extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this)

    this.state = {
      dropdownOpen: false
    };
  }

  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    this.props.logout();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
        <DropdownToggle nav className="pt-0">
          {(this.props.username) ? this.props.username : (undefined) }
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <NavLink 
              to='/checklist'
              className="text-secondary nav-link"
            >
              Vacation Checklist
            </NavLink>
          </DropdownItem>
          <DropdownItem className="text-secondary">
            <NavLink
              to='/'
              className='nav-link'
            >
              Reserved Trips
            </NavLink>
          </DropdownItem>
          <DropdownItem className="text-secondary">
            <NavLink
              to='/'
              className="nav-link"
            >
              Account
            </NavLink>
          </DropdownItem>
          <DropdownItem 
            onClick={this.logout} 
            className="text-secondary"
          >
            <NavLink
              to='/'
              className='nav-link'
            >
              Logout
            </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

const mapStateToProps = (state) => {
  return { username: state.loginStatus.username };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLinkOptions);