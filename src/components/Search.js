import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { homeawaySearch } from '../actions/homeawaySearch';
import { BeatLoader } from 'react-spinners';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      q: '',
      date_check_in: '',
      date_check_out: '',
      guests: '',
      loading: false
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    this.setState({
      loading: true
    });
    e.preventDefault();
    const data = JSON.stringify({
      q: e.target.q.value,
      imageSize: 'MEDIUM',
      availabilityStart: `${this.state.date_check_in}`,
      availabilityEnd: `${this.state.date_check_out}`,
      minSleeps: `${this.state.guests}`
    });
    this.props.homeawaySearch(data, this.props.history);
  }

  render() {
    return( 
      <Form onSubmit={this.handleSubmit} className='rounded d-flex justify-content-around align-items-end ml-auto mr-auto w-75'>
        <Input className='mb-3 ml-2 w-25' type='q' name='q' placeholder='Where do you want to go?'
          value = {this.state.q}
          onChange = {this.handleInputChange}
        />
        <FormGroup>
          <Label for='date_check_in'>Check In</Label>
          <Input type='date' name='date_check_in'
            value = {this.state.date_check_in} 
            onChange = {this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='date_check_out'>Check Out</Label>
          <Input type='date' name='date_check_out'
            value = {this.state.date_check_out}
            onChange = {this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Guests</Label>
          <Input type='number' name='guests'
            value = {this.state.guests}
            onChange = {this.handleInputChange}
          />
        </FormGroup>
        <Button className='mb-3 mr-2'>
          {this.state.loading ? (
            <BeatLoader
              color={'#000'}
              loading={this.state.loading}
            >Search</BeatLoader> ) : (
            'Search'
          )}
        </Button>
      </Form>    
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ homeawaySearch }, dispatch);
};

export default withRouter(connect(null, mapDispatchToProps)(Search));