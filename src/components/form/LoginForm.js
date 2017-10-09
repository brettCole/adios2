import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { jwt } from '../../actions/login'
require ('../../components/Register.css');

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  onFormSubmit(e) {
    const data = `{"auth":{"email":"${this.state.email}","password":"${this.state.password}"}}`
    const token = 'Bearer ' + localStorage.getItem('jwt');
    
    e.preventDefault();
    this.props.jwt(data, token, this.props.history);
  }

  render() {
    return (
      <Container className='homepage_background_3 w-100 d-flex justify-content-center align-items-center display-height'>
        <Form 
          onSubmit={this.onFormSubmit.bind(this)} className='border border-secondary rounded d-flex justify-content-center flex-column col-lg-4 col-md-6 col-sm-6'
        >
          <Label className='font-weight-bold'>Please Login</Label>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label className='mb-0 align-self-start' for='username'>Email</Label>
            <Input size='sm' 
              type='email' 
              name='email'
              value = {this.state.email}
              onChange = {this.handleInputChange} 
            />
          </FormGroup>
          <FormGroup className='mb-2 d-flex flex-column'>
            <Label className='mb-0 align-self-start' for='password'>Password</Label>
            <Input size='sm' placeholder='*****'
              type='password' 
              name='password'
              value = {this.state.password}
              onChange = {this.handleInputChange}
            />
          </FormGroup>
          <Button className='mb-3 mt-2 w-50 align-self-center' color='info'>Confirm Identity</Button>
          <p>New here please <Link to='/signup'>Signup</Link>!</p>
        </Form>
      </Container>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ jwt }, dispatch);
};

export default connect(null, mapDispatchToProps)(LoginForm);
