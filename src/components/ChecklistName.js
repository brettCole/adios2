import React from 'react';
import { Button, Container, Form, Input, ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { connect } from 'react-redux';
import { EntypoPlus } from 'react-entypo';
import CreateItem from './CreateItem';

const ChecklistName = (props) => {
  return (
    <Container className='d-flex flex-row flex-wrap justify-content-between mt-5'>
      {props.checklists ? (
        props.checklists.map((element, index) => {
          return (
            <Container className='w-50 mb-5'>
              <ListGroup>
                <ListGroupItemHeading key={index.toString()}>{element.title}</ListGroupItemHeading>
                <CreateItem
                  keyIndex = {index + 1}
                />
                {element.items.map((each, i) => {
                  return (
                    <div key={i.toString()}>
                      <ListGroupItemText className='mb-1'>{each.title}</ListGroupItemText>
                    </div>
                  )
                })}
              </ListGroup>
            </Container> )
        })
      ) : (null)}
    </Container>
  )} 

const mapStateToProps = (state) => {
  return { checklists: state.createChecklist.checklists }
}
 
export default connect(mapStateToProps)(ChecklistName);