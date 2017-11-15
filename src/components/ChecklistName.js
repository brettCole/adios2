import React from 'react';
import { Container, ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { connect } from 'react-redux';
import CreateItem from './CreateItem';
import { v4 } from 'uuid';

const ChecklistName = (props) => { 
  return (
    <Container className='d-flex flex-row flex-wrap justify-content-between mt-5'>
      {props.checklists ? (
        props.checklists.map((element, index) => {
          return (
            <Container key={v4()} className='w-50 mb-5'>
              <ListGroup key={v4()}>
                <ListGroupItemHeading key={v4()}>{element.title}</ListGroupItemHeading>
                <CreateItem key={v4()}
                  keyIndex = {index + 1}
                />
                {element.items.map((each, i) => {
                  return (
                    <div key={v4()}>
                      <ListGroupItemText key={v4()} className='mb-1'>{each.title}</ListGroupItemText>
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