import React from 'react';
import { Button, Container, InputGroup, Input } from 'reactstrap';

class Footer extends React.Component { 
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  onSubmitEmail = (e) => {
    e.preventDefault();
    const url = 'http://localhost:3001/api/v1/email';
    const data = `{"email":{"email":"${this.state.email}"}}`
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: data
    })
    this.setState({
      email: ''
    })
  }

  render() {
    return (
      <Container className='w-100 footer-background'>
        <div className='d-flex col-lg-10 mr-auto ml-auto'>
          <p className='w-50 mt-2'>Subscribe to our newsletter to receive current vacation rental deals and specials</p>
          <InputGroup className='mt-2 w-50'>
            <Input className='footer-email' 
              type='email' 
              name='email' 
              value={this.state.email}
              onChange={this.handleInputChange} placeholder='Email Address' />
            <Button className='footer-email'
              onClick={this.onSubmitEmail}
            >Subscribe</Button>
          </InputGroup>
        </div>
        <hr className='w-75 mt-4' color='black' />
        <div className='d-flex justify-content-around'>
          <p className='w-50 align-self-center'>Thanks for checking out my React Adíos Vaca App. I am a enthusiastic full-stack web developer. Send me an email or check me out on LinkedIn. You can read about some of my struggles and things I've learned along the way on my blog. Shameless Plug</p>
          <div className='vertical'></div>
          <div className='align-self-center'>
            <p><a href="mailto:acodercalledcole@gmail.com">acodercalledcole@gmail.com</a></p>
            <p><a href='https://www.linkedin.com/in/brett-cole-ba86b297/'>LinkedIn</a></p>
            <a href='http://www.acodercalledcole.com'>acodercalledcole.com</a>
          </div>
        </div>
        <p className='mb-0'>&copy; 2017 Adíos.com, All Rights Reserved &#9760;</p>
      </Container>
    )
  }
}

export default Footer;