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
      <Form onSubmit={this.handleSubmit} className='border border-secondary rounded d-flex-column justify-content-start aligm-items-start col-lg-4 col-md-6 col-sm-6'>
        <FormGroup className='mt-4'>
          <Input size='lg' type='search' name='q' placeholder='Where do you want to go?' />
        </FormGroup>
        <FormGroup>
          <Input size='sm' type='date' name='date_check_in' placeholder='Check-In' />
          <Input size='sm' type='date' name='date_check_out' placeholder='Check-Out' />
        </FormGroup>
        <FormGroup>
          <Label className='mb-0 align-self-start' name='guests'># of Guests</Label>
          <Input type='select' name='guests'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label className='mb-0 align-self-start' name='guests'># of Rooms</Label>
          <Input type='select' name='rooms'>
            <option>1</option>
            <option>2</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label className='mb-0 align-self-start' for='pets' check>
            <Input className='mr-3' type='checkbox' name='pets' />
            Pets
          </Label>
        </FormGroup>
        <Button className='mb-4'>Let's Get Away</Button>
      </Form>    
    )
  }
}

export default Search;