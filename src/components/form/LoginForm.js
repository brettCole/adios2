import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
require ('../../components/Register.css');

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
      password: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3001/user_token', {
      method: 'POST',
      credentials: 'include',
      'Content-Type': 'application/json',
      body: {
        'auth': {
          'email': 'auth[email]',
          'password': 'auth[password]'
        }
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <Container className='homepage_background_3 w-100 d-flex justify-content-center align-items-center display-height'>
        <Form onSubmit={this.onFormSubmit} className='border border-secondary rounded d-flex justify-content-center flex-column col-lg-4 col-md-6 col-sm-6'>
          <Label className='font-weight-bold'>Please Login</Label>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label onChange={this.handleChange} className='mb-0 align-self-start' for='username'>Email</Label>{' '}
            <Input size='sm' type='email' name='auth[email]' />
            <p>{this.state.email}</p>
          </FormGroup>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label onChange={this.handleChange} className='mb-0 align-self-start' for='password'>Password</Label>{' '}
            <Input size='sm' type='password' name='auth[password]' placeholder='*****' />
            <p>{this.state.password}</p>
          </FormGroup>
          <Button className='mb-3 mt-2 w-50 align-self-center' color='info'>Confirm Identity</Button>
        </Form>
      </Container>
    )
  }
}

export default LoginForm;