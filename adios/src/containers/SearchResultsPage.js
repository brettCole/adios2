import React from 'react';
import { connect } from 'react-redux';
import { Card, CardDeck, CardImg, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap';
import Navigation from './Navigation';
import Search from '../components/Search';
import Footer from '../components/Footer';

const SearchResultsPage = (props) => {
  // debugger;
  function splitIt(accommodations) {
    return accommodations.split(" ")
  }

  function stars(reviewAverage) {
    return reviewAverage.toFixed(1);
  }

  const testing = props.listings.map(each => 
    <Card className='d-flex flex-row justify-content-start mb-3 mt-3'>
      <CardImg
        key={each.id + each.thumbnail.uri}
        src={each.thumbnail.uri} 
        alt='practice'
      />
      <div className='d-flex flex-column align-self-center ml-auto mr-auto card-body w-100'>
        <CardTitle>
          {each.headline}
        </CardTitle>
        <CardText>
          {each.minStayRange.minStayLow} night min stay
        </CardText>
        <div className='d-flex flex-row justify-content-between'>
          <div>
            <CardSubtitle>Sleeps</CardSubtitle>
            <CardText>
              {splitIt(each.accommodations)[4]}
            </CardText>
            <CardSubtitle>Bedrooms</CardSubtitle>
            <CardText>
              {each.bedrooms}
            </CardText>
            <CardSubtitle>Bathrooms</CardSubtitle>
            <CardText>
              {each.bathrooms}
            </CardText>
            </div>
            <div className='d-flex flex-column justify-content-end'>
            <CardText>
              {stars(each.reviewAverage)} stars
            </CardText>
          </div>
      </div>
      </div>
    </Card>
  );

  return (
    <Container className='col footer-background'>
      <Navigation />
      <Container className="d-block pt-3" style={{marginTop: '68px'}}>
      <Search />
      
      <CardDeck className='d-flex flex-column'>
        {testing}
      </CardDeck>
      </Container>
      <Footer />
    </Container> 
  )
}

const mapStateToProps = (state) => {
  return { listings: state.searchResults.listings }
}

export default connect(mapStateToProps)(SearchResultsPage);