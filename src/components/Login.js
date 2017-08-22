import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
require('./Register.css');


class Login extends Component {
  constructor(props) {
  super(props);

  this.handleSubmit = this.handleSubmit.bind(this);
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
        <p className='text-center pt-3'>Login</p>
        <FormGroup className='justify-content-left pt-2 pl-2' row>
          <Label for='email' sm={2}>Email</Label>
          <Col sm={8}>
            <Input type='email' name='email' />
          </Col>
        </FormGroup>
        <FormGroup className='justify-content-left pl-2' row>
          <Label for='password' sm={2}>Password</Label>
          <Col sm={8}>
            <Input type='password' name='password' placeholder='*****' />
          </Col>
        </FormGroup>
        <FormGroup className='justify-content-center pb-2' row>
          <Col sm={8}>
            <Button>Confirm Identity</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default Login;