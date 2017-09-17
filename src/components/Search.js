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
      rooms: '',
      pet: ''
    }

  }

  componentDidMount() {
    const url = 'https://ws.homeaway.com/oauth/token';
    const clientId = process.env.REACT_APP_HOMEAWAY_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_HOMEAWAY_CLIENT_SECRET;
    const credentials = clientId + ':' + clientSecret;
    let authVal = 'Basic ' + btoa(credentials);

    fetch(url, {
     method: 'POST',
     headers: {
      'Authorization': authVal,
      }
     }).then(response => response.json()) 
      .then(data => {
        let test = data;
        console.log(test);
        let type = data.token_type;
        console.log(type);
        let access_token = data.access_token;
        console.log(access_token);
      })
  }

  handleSubmit = event => {
    event.preventDefault();
    const url = 'https://ws.homeaway.com/public/search';
    fetch(url, {
      headers: {
        'Authorization': 'Bearer ZjA3OTEyNjgtODRiMy00ZTk0LWI4YTgtOTVkMmY2NzYzM2Zh'
      }
    }).then(response => response.json())
    .then(data => {
      // let testing = da
      console.log(data)
    })
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit} className='rounded d-flex justify-content-around align-items-end ml-auto mr-auto w-75'>
        <Input className='mb-3 ml-2 w-25' type='search' name='q' placeholder='Where do you want to go?' />
        <FormGroup>
          <Label for='date_check_in'>Check In</Label>
          <Input type='date' name='date_check_in' value='new Date()' />
        </FormGroup>
        <FormGroup>
          <Label for='date_check_out'>Check Out</Label>
          <Input type='date' name='date_check_out' placeholder='Check-Out' />
        </FormGroup>
        <FormGroup>
          <Label>Guests</Label>
          <Input type='number' name='guests' />
        </FormGroup>
        <Button className='mb-3 mr-2'>Search</Button>
      </Form>    
    )
  }
}

export default Search;