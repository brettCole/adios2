import React from 'react';
import { bindActionCreators } from 'redux';
import { completedItem } from '../actions/createItem';
import { Container, ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { connect } from 'react-redux';
import CreateItem from './CreateItem';
import { EntypoCheck } from 'react-entypo';
import { v4 } from 'uuid';

// const ChecklistName = (props) => { 
  class ChecklistName extends React.Component {

    completedItem(e) {
      const parentId = parseInt(e.currentTarget.parentElement.parentElement.firstChild.id, 10);
      const itemId = parseInt(e.currentTarget.id, 10);
      e.preventDefault();
      this.props.completedItem(itemId, parentId);
    }

    render() {
      debugger;
  return (
    <Container className='d-flex flex-row flex-wrap justify-content-between mt-5'>
      {this.props.checklists ? (
        this.props.checklists.map((element, index) => {
          console.log(element, element.items)
          return (
            <Container key={v4()} className='w-50 mb-5'>
              <ListGroup key={v4()}>
                <ListGroupItemHeading id={element.id} key={v4()}>{element.title}</ListGroupItemHeading>
                <CreateItem key={v4()}
                  keyIndex = {index + 1}
                />
                {element.items.map((each, i) => {
                  return (
                    <div key={v4()}>
                      {each.completed === true ? (
                        <ListGroupItemText id={each.id} key={v4()} className='mb-1' 
                          
                        ><EntypoCheck />{each.title}</ListGroupItemText>
                      ) : (
                        <ListGroupItemText id={each.id} key={v4()} className='mb-1' 
                          onClick={this.completedItem.bind(this)}
                        >{each.title}</ListGroupItemText>
                      ) }
                    </div>
                  )
                })}
              </ListGroup>
            </Container> )
        })
      ) : (null)}
    </Container>
  )}
} 

const mapStateToProps = (state) => {
  return { checklists: state.createChecklist.checklists }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ completedItem }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ChecklistName);