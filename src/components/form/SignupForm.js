import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../containers/Navigation'
require ('../../components/Register.css');

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value })
  }

  onFormSubmit = (event) => {
    const url = 'http://localhost:3001/api/v1/register';
    event.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user": {
          "username": `${this.state.username}`,
          "name": `${this.state.name}`,
          "email": `${this.state.email}`,
          "password": `${this.state.password}`,
          "password_confirmation": `${this.state.password_confirmation}`
        }
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <Navigation />
      <Container className='homepage_background_2 w-100 d-flex justify-content-center align-items-center display-height'>
        <Form
          onSubmit={this.onFormSubmit} className='border border-secondary rounded d-flex justify-content-center flex-column col-lg-4 col-md-6 col-sm-6'
        >
          <Label className='font-weight-bold'>Please Register with Adíos</Label>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label className='mb-0 align-self-start' for='username'>Username</Label>{' '}
            <Input size='sm' type='username' name='username'
              value = {this.state.username}
              onChange = {this.handleInputChange}
            />
          </FormGroup>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label className='mb-0 align-self-start' for='name'>Name</Label>{' '}
            <Input size='sm' type='name' name='name'
              value = {this.state.name}
              onChange = {this.handleInputChange}
            />
          </FormGroup>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label className='mb-0 align-self-start' for='email'>Email</Label>{' '}
            <Input  size='sm' type='email' name='email'
              value = {this.state.email}
              onChange = {this.handleInputChange}
            />
            <FormText className='align-self-start' color='muted'>We will never share your email with anyone else.</FormText>
          </FormGroup>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label className='mb-0 align-self-start' for='password'>Password</Label>{' '}
            <Input size='sm' type='password' name='password' placeholder='*****'
              value = {this.state.password}
              onChange = {this.handleInputChange}
            />
          </FormGroup>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label className='mb-0 align-self-start' for='password'>Re-Enter Password</Label>{' '}
            <Input size='sm' type='password' name='password_confirmation' placeholder='*****'
              value = {this.state.password_confirmation}
              onChange = {this.handleInputChange}
            />
          </FormGroup>
          <Button className='mb-3 mt-2 w-50 align-self-center' color='info'>Create Profile</Button>
          <p>Been here before? Please <Link to='/login'>Login</Link>!</p>
        </Form>
      </Container>
      </div>
    )
  }
}

export default SignupForm;