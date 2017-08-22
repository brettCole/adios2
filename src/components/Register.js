import React, { Component } from 'react';
import { Form, FormGroup, FormText, Label, Input, Button, Col } from 'reactstrap';
require('./Register.css');

class Register extends Component {
  constructor(props) {
  super(props);

  this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    const newRequest = new Request('http://localhost:3001/api/users', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    fetch(newRequest);
  }

  render() {
    return (
      <Form className='rounded w-50' onSubmit={this.handleSubmit}>
        <p className='text-center pt-3'>Register</p>
        <FormGroup className='justify-content-left pt-2 pl-2' row>
          <Label for='name' sm={2}>Name</Label>
          <Col sm={8}>
            <Input type='name' name='name' />
          </Col>
        </FormGroup>
        <FormGroup className='justify-content-left pl-2' row>
          <Label for='email' sm={2}>Email</Label>
          <Col sm={8}>
            <Input type='email' name='email' />
          </Col>
        </FormGroup>
        <FormGroup className='justify-content-left pl-2' row>
          <Label for='password' sm={2}>Password</Label>
          <Col sm={8}>
            <Input type='password' name='password' placeholder='*****' />
            <FormText color="muted">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</FormText>
          </Col>
        </FormGroup>
        <FormGroup className='justify-content-left pl-2' row>
          <Label for='password' name='password_confirmation' sm={2}>Re-enter Password</Label>
          <Col sm={8}>
            <Input type='password' name='password_confirmation' placeholder='*****' />
          </Col>
        </FormGroup>
        <FormGroup className='justify-content-center pb-2' row>
          <Col sm={8}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default Register;