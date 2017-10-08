import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Navigation from './Navigation';
import Search from '../components/Search';
import CheckListLink from '../components/CheckListLink';
import Flipkey from '../components/Flipkey';
import Footer from '../components/Footer';
require('../components/Register.css');

class Homepage extends Component {

  componentDidMount() {
    const url = 'https://ws.homeaway.com/oauth/token';
    const clientId = process.env.REACT_APP_HOMEAWAY_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_HOMEAWAY_CLIENT_SECRET;
    const credentials = clientId + ':' + clientSecret;
    let authVal = 'Basic ' + btoa(credentials);

    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': authVal,
      }
    }).then(response => response.json()) 
    .then(data => {
      localStorage.setItem('access', data.access_token);
      localStorage.setItem('refresh', data.refresh_token);
    });
  }

  render() {
    return(
      <Container className='w-100 display-height p-0'>
        <Navigation />
        <Container className='d-flex align-items-center w-100 search-height homepage_background_3 p-0'>
          <Search />
        </Container>
        <Container className='w-100 p-0'>
          <CheckListLink />
        </Container>
        <Flipkey />
        <Footer />
      </Container>
    )
  }
}

export default Homepage;