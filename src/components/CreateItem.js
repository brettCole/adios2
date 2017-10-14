import React from 'react';
import { Button, Container, Form, Input, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { EntypoPlus } from 'react-entypo';

class CreateItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false,
      item: ''
    }
  }

  toggle =  () => {
    this.setState({ popoverOpen: !this.state.popoverOpen });
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  onItemNameSubmit = (e) => {
    const checklistData = JSON.stringify({
      "title": e.parentNode.firstChild.innerHTML
    })
    e.preventDefault();
    fetch('http://localhost:3001/api/v1/checklist', {
      method: 'GET',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      body: checklistData
    }).then(response => response.json())
    .then(data => {
      const itemData = JSON.stringify({
        "item": {
          "item": `${this.state.item}`,
          "checklist_id": data.id
        }
      })
      fetch('http://localhost:3001/api/v1/create_item', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Cotent-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
        body: itemData
      }).then(response => response.json())
      .then(data => {
        this.forceUpdate()
      })
    })
  };
  

  render() {
    return (
      <Container className='d-flex justify-content-center'>
        <Button id={'Popover' + this.props.keyIndex} className='w-50 d-flex justify-content-center info' color='info'
          onClick = {this.toggle}
        >
          <EntypoPlus /><p className='mb-0 ml-2'>Add Item</p>
        </Button>
        <Popover placement='bottom' isOpen={this.state.popoverOpen} target={'Popover' + this.props.keyIndex} toggle={this.toggle}>
          <Form 
            onSubmit = {this.onItemNameSubmit}
          >
            <Input size='sm' name='item'
              value = {this.state.item}
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