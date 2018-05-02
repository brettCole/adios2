import React from 'react';
import { Container } from 'reactstrap';
import Navigation from './Navigation';
import Search from '../components/Search';
import CheckListLink from '../components/CheckListLink';
import Flipkey from '../components/Flipkey';
import Footer from '../components/Footer';

const Homepage = (props) => {
    return(
      <Container className='col p-0'>
        <Navigation />
        <Container className='col d-flex align-items-center w-100 search-height homepage_background_3 p-0'>
          <Search />
        </Container>
        <Container className='col p-0'>
          <CheckListLink />
        </Container>
        <Flipkey />
        <Footer />
      </Container>
    )
  }


export default Homepage;