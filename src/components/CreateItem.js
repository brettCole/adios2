import React from 'react';
import { Button, Container, Form, Input, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { EntypoPlus } from 'react-entypo';

class CreateItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false,
      itemName: ''
    };
  }

  toggle =  () => {
    this.setState({ popoverOpen: !this.state.popoverOpen });
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  itemNameSubmit = (e) => {
    const checklistData = JSON.stringify({
      "checklist": {
        "title": 
      }
    })
    e.preventDefault();
    fetch('http://localhost:3001/api/v1/checklists:id', {
      method: 'GET',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      body: checklistData
    })

    const data = JSON.stringify({
      "item": {
        "item": `${this.state.itemName}`,
        "checklist_id": 
      }
    })
  }

  render() {
    return (
      <Container className='d-flex justify-content-center'>
      <Button id='Popover1' className='w-50 d-flex justify-content-center info' color='info'
        onClick = {this.toggle}
      >
        <EntypoPlus /><p className='mb-0 ml-2'>Add Item</p>
      </Button>
      <Popover placement='bottom' isOpen={this.state.popoverOpen} target='Popover1' toggle={this.toggle}>
      <Form 
        onSubmit = {this.itemNameSubmit}
      >
      <Input size='sm' name='checklistName'
        value = {this.state.itemName}
        onChange = {this.handleInputChange}
      />
      <Button size='sm' className='w-100 mt-1'>Create</Button>
      </Form>
      </Popover>
      </Container>
    )
  }
}

export default CreateItem;