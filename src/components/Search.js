import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
require('./Register.css');

const Search = () => {
  return(
    <Form className='border border-secondary rounded d-flex justify-content-start aligm-items-start col-lg-4 col-md-6 col-sm-6'>
      <FormGroup className='mt-4'>
        <Input size='lg' type='search' name='search' placeholder='Where do you want to go?' />
      </FormGroup>
      <FormGroup>
        <Input size='sm' type='date' placeholder='Check-In' />
        <Input size='sm' type='date' placeholder='Check-Out' />
      </FormGroup>
      <FormGroup>
        <Label className='mb-0 align-self-start' name='guests'># of Guests</Label>
        <Input type='select' name='guests'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label className='mb-0 align-self-start' name='guests'># of Rooms</Label>
        <Input type='select' name='rooms'>
          <option>1</option>
          <option>2</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label className='mb-0 align-self-start' for='pets' check>
          <Input className='mr-3' type='checkbox' name='pets' />
          Pets
        </Label>
      </FormGroup>
      <Button className='mb-4'>Let's Get Away</Button>
    </Form>    
  )
}

export default Search;