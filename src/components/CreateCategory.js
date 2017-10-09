import React, { Component } from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, Form, Input } from 'reactstrap';
import { EntypoPlus } from 'react-entypo';

class CreateCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      categoryName: ''
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleCategoryNameChange = (e) => {
    this.setState({ categoryName: e.target.value })
  }

  onCategoryNameSubmit = (e) => {
    debugger;
    const url = 'http://localhost:3001/api/v1/create_checklist';
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "title": `${this.state.categoryName}`
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <Container className='w-100 d-flex justify-content-center mt-3'>
        <Button id='Popover1' className='w-25 d-flex justify-content-center align-items-center info' color='info'
          onClick={this.toggle}
        >
          <EntypoPlus /><p className='mb-0 ml-2'>New Checklist</p>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Checklist Title</ModalHeader>
          <ModalBody>
            <Form 
              onSubmit = {this.onCategoryNameSubmit}
            >
              <Input size='sm' name='categoryName'
                value = {this.state.categoryName}
                onChange = {this.handleCategoryNameChange}
              />
              <Button size='sm' className='w-100 mt-1'>Create</Button>
          </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default CreateCategory;  