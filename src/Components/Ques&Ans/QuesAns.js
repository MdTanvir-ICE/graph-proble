import React from 'react';
import { Accordion,Card } from 'react-bootstrap';
import './QuesAns.css'
const QuesAns = () => {
    return (
<Accordion style={{color:'white'}}>
  <Card className='m-1'>
    <Accordion.Toggle as={Card.Header} eventKey="0"style={{background:'#1A0D2A'}}>
     where are you like to travel?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body className='bg-primary'>Sylhet</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className='m-1'>
    <Accordion.Toggle as={Card.Header} eventKey="1"style={{background:'#1A0D2A'}}>
     How are you?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body className='bg-primary'>I am fine</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        
    );
};

export default QuesAns;