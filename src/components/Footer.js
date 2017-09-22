import React from 'react';
import { Container, InputGroup, InputGroupAddon, Input } from 'reactstrap';
require('../components/Register.css');

class Footer extends React.Component {
  render() {
    return (
      <Container className='w-100 footer-background'>
        <div className='d-flex col-lg-10 mr-auto ml-auto'>
          <p className='w-50 mt-2'>Subscribe to our newsletter to receive current vacation rental deals and specials</p>
          <InputGroup className='mt-2 w-50'>
            <Input className='footer-email' type='email' name='email' placeholder='Email Address' />
            <InputGroupAddon className='footer-email'>
              <a href='#'>
                Subscribe
              </a>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <hr className='w-75 mt-4' color='black' />
        <div className='d-flex justify-content-around'>
          <p className='w-50 align-self-center'>Thanks for checking out my React Adíos Vaca App. I am a enthusiastic full-stack web developer. Send me a email or check me out on LinkedIn. You can read about some of my struggles and things I've learned along the way on my blog. Shameless Plug</p>
          <div className='vertical'></div>
          <div className='align-self-center'>
            <p>acodercalledcole@gmail.com</p>
            <p>LinkedIn</p>
            <p>acodercalledcole.com</p>
          </div>
        </div>
        <p className='mb-0'>&copy; 2017 Adíos.com, All Rights Reserved &#9760;</p>
      </Container>
    )
  }
}

export default Footer;