import React from 'react';
import { Button, Container, Form, FormGroup, FormText, Label, Input } from 'reactstrap';
require ('../../components/Register.css');

const SignupForm = () => {
  return (
    <Container className='homepage_background_2 w-100 d-flex justify-content-center align-items-center display-height'>
      <Form className='border border-secondary rounded d-flex justify-content-center flex-column col-lg-4 col-md-6 col-sm-6'>
        <Label className='font-weight-bold'>Please Register with Adíos</Label>
        <FormGroup className='mb-2 d-flex flex-column'>
          <Label className='mb-0 align-self-start' for='username'>Username</Label>{' '}
          <Input size='sm' type='username' name='username' />
        </FormGroup>
        <FormGroup className='mb-2 d-flex flex-column'>
          <Label className='mb-0 align-self-start' for='name'>Name</Label>{' '}
          <Input size='sm' type='name' name='name' />
        </FormGroup>
        <FormGroup className='mb-2 d-flex flex-column'>
          <Label className='mb-0 align-self-start' for='email'>Email</Label>{' '}
          <Input  size='sm' type='email' name='email' />
          <FormText className='align-self-start' color='muted'>We will never share your email with anyone else.</FormText>
        </FormGroup>
        <FormGroup className='mb-2 d-flex flex-column'>
          <Label className='mb-0 align-self-start' for='password'>Password</Label>{' '}
          <Input size='sm' type='password' name='password' placeholder='*****' />
        </FormGroup>
        <FormGroup className='mb-2 d-flex flex-column'>
          <Label className='mb-0 align-self-start' for='password'>Re-Enter Password</Label>{' '}
          <Input size='sm' type='password' name='password' placeholder='*****' />
        </FormGroup>
        <Button className='mb-3 mt-2 w-50 align-self-center' color='info'>Create Profile</Button>
      </Form>
    </Container>
  )
}

export default SignupForm;