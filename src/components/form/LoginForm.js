import React from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
require ('../../components/Register.css');

const LoginForm = () => {
  return (
    <Container className='homepage_background_3 w-100 d-flex justify-content-center align-items-center display-height'>
      <Form className='border border-secondary rounded d-flex justify-content-center flex-column col-lg-4 col-md-6 col-sm-6'>
        <Label className='font-weight-bold'>Please Login</Label>
        <FormGroup className='mb-2 d-flex flex-column'>
          <Label className='mb-0 align-self-start' for='username'>Username</Label>{' '}
          <Input size='sm' type='username' name='username' />
        </FormGroup>
        <FormGroup className='mb-2 d-flex flex-column'>
          <Label className='mb-0 align-self-start' for='password'>Password</Label>{' '}
          <Input size='sm' type='password' name='password' placeholder='*****' />
        </FormGroup>
        <Button className='mb-3 mt-2 w-50 align-self-center' color='info'>Confirm Identity</Button>
      </Form>
    </Container>
  )
}

export default LoginForm;