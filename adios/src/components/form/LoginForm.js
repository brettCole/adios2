import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Navigation from '../../containers/Navigation';
import { jwt } from '../../actions/login';
import { BeatLoader } from 'react-spinners';
import Footer from '../../components/Footer';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  onFormSubmit = (e) => {
    this.setState({
      loading: true
    });
    const data = `{"auth":{"email":"${this.state.email}","password":"${this.state.password}"}}`
    e.preventDefault();
    this.props.jwt(data, this.props.history);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container className='col homepage_background d-flex justify-content-center align-items-center display-height'>
          <Form 
            onSubmit={this.onFormSubmit} className='border border-secondary rounded d-flex justify-content-center flex-column col-lg-4 col-md-6 col-sm-6'
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
            <Button className='mb-3 mt-2 w-50 align-self-center' color='info'>
              {this.state.loading ? (
                <BeatLoader
                  color={'#123abc'}
                  loading={this.state.loading}
                >Confirm Identity</BeatLoader> ) : (
                'Confirm Identity' )
              }
            </Button>
            <p>New here please <Link to='/signup'>Signup</Link>!</p>
          </Form>
        </Container>
        <Footer></Footer>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ jwt }, dispatch);
};

export default connect(null, mapDispatchToProps)(LoginForm);
