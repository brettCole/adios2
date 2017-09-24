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
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  };

  onFormSubmit(e) {
    const url = 'http://localhost:3001/user_token';
    const data = `{"auth":{"email":"${this.state.email}","password":"${this.state.password}"}}`
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: data
    })
    .then(response => response.json())
    .then(data => console.log(data));

    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <Container className='homepage_background_3 w-100 d-flex justify-content-center align-items-center display-height'>
        <Form onSubmit={this.onFormSubmit.bind(this)} className='border border-secondary rounded d-flex justify-content-center flex-column col-lg-4 col-md-6 col-sm-6'>
          <Label className='font-weight-bold'>Please Login</Label>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label className='mb-0 align-self-start' for='username'>Email</Label>{' '}
            <Input size='sm' type='email' name='email'
              value = {this.state.email}
              onChange = {this.handleEmailChange.bind(this)} 
            />
          </FormGroup>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label className='mb-0 align-self-start' for='password'>Password</Label>{' '}
            <Input size='sm' type='password' name='password' placeholder='*****'
              value = {this.state.password}
              onChange = {this.handlePasswordChange.bind(this)}
            />
          </FormGroup>
          <Button className='mb-3 mt-2 w-50 align-self-center' color='info'>Confirm Identity</Button>
        </Form>
      </Container>
    )
  }
}

export default LoginForm;