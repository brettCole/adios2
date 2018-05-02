import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const CheckListLink = () => {
  return(
    <Container className='col d-flex justify-content-center align-items-baseline checklist-height homepage_background_2 w-100'>
      <div className='w-75'>
        <h3 className='text-white shadows pt-4 pb-5'>
          Don't leave home without your wallet. Create a checklist to remember the important things
        </h3>
        <Button 
          outline color='info' 
          className='text-white'
        >
          <Link to='/checklist' className='text-secondary'>
            Create Checklist
          </Link>
        </Button>
      </div>
    </Container>
  )
}


export default CheckListLink;