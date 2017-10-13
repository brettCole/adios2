import React from 'react';
import { Button, Container, Form, Input, ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import CreateItem from './CreateItem'
import { EntypoPlus } from 'react-entypo';

const ChecklistName = (props) => {
  const lists = props.checklists.map((element, index) => {
    const listItem = element.items.map((each, v) => 
      <div>
      <ListGroupItemText key={v}>{each.item}</ListGroupItemText>
      </div>
    )
    return (
    <Container className='w-50'>
      <ListGroup>
        <ListGroupItemHeading key={index}>{element.title}</ListGroupItemHeading>
        <CreateItem handleInputChange = {props.handleInputChange} />
        {listItem}
      </ListGroup>
    </Container>)
  })
  
  return(
    <Container className='d-flex flex-row flex-wrap justify-content-between mt-5'>
      {lists}
    </Container>
  )
}

export default ChecklistName;