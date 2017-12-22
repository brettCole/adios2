import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Container, Form, Input, Popover } from 'reactstrap';
import { EntypoPlus } from 'react-entypo';
import { createItem } from '../actions/createItem';
require ('isomorphic-fetch');

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

  onItemNameSubmit(e) {
    const buttonCall = document.getElementById('Popover' + this.props.keyIndex);
    const checklistName = buttonCall.parentElement.parentElement.firstElementChild.textContent;
    const itemData = JSON.stringify({
      "item": {
        "title": `${this.state.item}`,
        "checklist_id": checklistName
      }
    })
    e.preventDefault();
    this.props.createItem(itemData);
    }
  
  render() {  
    return (
      <Container className='d-flex justify-content-center'>
        <Button id={'Popover' + this.props.keyIndex} className='w-50 d-flex justify-content-center info' color='info'
          key = {'Popover' + this.props.keyIndex}
          onClick = {this.toggle}
        >
          <EntypoPlus /><p className='mb-0 ml-2'>Add Item</p>
        </Button>
        <Popover placement='bottom' isOpen={this.state.popoverOpen} target={'Popover' + this.props.keyIndex} toggle={this.toggle}>
          <Form 
            onSubmit={this.onItemNameSubmit.bind(this)}
          >
            <Input size='sm' name='item'
              value = {this.state.item}
              onChange = {this.handleInputChange}
            />
            <Button size='sm' className='w-100 mt-1'>Create Item</Button>
          </Form>
        </Popover>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(CreateItem);