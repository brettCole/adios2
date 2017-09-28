import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
require('./Register.css');

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      date_check_in: '',
      date_check_out: '',
      guests: '',
    }
  }

  handleQChange = (e) => {
    this.setState({ q: e.target.value });
  };

  handleCheckInChange = (e) => {
    this.setState({ date_check_in: e.target.value });
  };

  handleCheckOutChange = (e) => {
    this.setState({ date_check_out: e.target.value });
  };

  handleGuestChange = (e) => {
    this.setState({ guests: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://ws.homeaway.com/public/search';
    fetch(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.access}`
      }
    }).then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit} className='rounded d-flex justify-content-around align-items-end ml-auto mr-auto w-75'>
        <Input className='mb-3 ml-2 w-25' type='search' name='q' placeholder='Where do you want to go?'
          value = {this.state.q}
          onChange = {this.handleQChange} 
        />
        <FormGroup>
          <Label for='date_check_in'>Check In</Label>
          <Input type='date' name='date_check_in' value='new Date()'
            value = {this.state.date_check_in} 
            onChange = {this.handleCheckInChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='date_check_out'>Check Out</Label>
          <Input type='date' name='date_check_out' placeholder='Check-Out'
            value = {this.state.date_check_out}
            onChange = {this.handleCheckOutChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Guests</Label>
          <Input type='number' name='guests'
            value = {this.state.guests}
            onChange = {this.handleGuestChange}
          />
        </FormGroup>
        <Button className='mb-3 mr-2'>Search</Button>
      </Form>    
    )
  }
}

export default Search;