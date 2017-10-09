import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';

class UserLinkOptions extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this)

    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
        <DropdownToggle nav caret>
          {this.props.username}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem><Link to='/checklist'>Vacation Checklist</Link></DropdownItem>
          <DropdownItem>Reserved Trips</DropdownItem>
          <DropdownItem>Account</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default connect(null)(UserLinkOptions);