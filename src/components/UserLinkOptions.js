import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
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
        <DropdownToggle nav>
          {JSON.parse(localStorage.getItem('user')).username}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem><Link to='/checklist'>Vacation Checklist</Link></DropdownItem>
          <DropdownItem>Reserved Trips</DropdownItem>
          <DropdownItem>Account</DropdownItem>
          <DropdownItem onClick={this.logout}>Logout</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

const mapStateToProps = (state) => {
  return { username: state.loginStatus.username}
}

export default connect(mapStateToProps)(UserLinkOptions);