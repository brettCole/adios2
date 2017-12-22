import React, { Component } from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, Form, Input } from 'reactstrap';
import { EntypoPlus } from 'react-entypo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { createChecklist } from '../actions/createChecklist';

class CreateChecklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      checklistName: ''
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  checklistNameSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      "checklist": {
        "title": `${this.state.checklistName}`,
        "user_id": `${JSON.parse(localStorage.getItem('user')).id}`
      }
    })
    this.props.createChecklist(data);
    this.setState({
      modal: false,
      checklistName: ''
    })
  }

  render() {
    return (
      <Container className='w-100 d-flex justify-content-center mt-3'>
        <Button className='w-25 d-flex justify-content-center align-items-center mt-5 info' color='info'
          onClick={this.toggle}
        >
          <EntypoPlus /><p className='mb-0 ml-2'>New Checklist</p>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Checklist Title</ModalHeader>
          <ModalBody>
            <Form 
              onSubmit = {this.checklistNameSubmit.bind(this)}
            >
              <Input size='sm' name='checklistName'
                value = {this.state.checklistName}
                onChange = {this.handleInputChange}
              />
              <Button size='sm' className='w-100 mt-1'>Create</Button>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createChecklist }, dispatch);
};

export default withRouter(connect(null, mapDispatchToProps)(CreateChecklist)); 