import React, { Component } from 'react';
import { Container, Button, Popover, PopoverContent, Form, Input, Label } from 'reactstrap';
import { EntypoPlus } from 'react-entypo';

class CreateCategory extends Component {
  constructor() {
    super();

    this.state = {
      popoverOpen: false
    };
  }

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  handleCategoryNameChange = (e) => {
    this.setState({ categoryName: e.target.value });
  };

  onCategoryNameSubmit = (e) => {
    const url = 'http://localhost:3001/api/v1/categories';
    e.preventDefault();

  }

  render() {
    return (
      <Container className='w-100 d-flex justify-content-center mt-3'>
        <Button onClick={this.toggle} id='Popover1' className='w-25 d-flex justify-content-center align-items-center info' color='info'>
          <EntypoPlus /><p className='mb-0 ml-2'>Create Category</p>
        </Button>
        <Popover placement='right center' 
          isOpen={this.state.popoverOpen} target='Popover1' toggle={this.toggle}
        >
          <Form
            onSubmit = {this.onCategoryNameSubmit}
          >
            <Input size='sm' name='categoryName'
              value = {this.state.categoryName}
              onChange = {this.handleCategoryNameChange}
            />
            <Button size='sm' className='w-100 mt-1'>Create</Button>
          </Form>
        </Popover>
      </Container>
    );
  }
}

export default CreateCategory;