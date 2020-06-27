import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';



const ContactCard = () => {
  return (
    <Accordion style={{ maxWidth: '15rem' }}>
      <Card>
        <Card.Header className='p-1 w-auto d-flex justify-content-center'>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <FontAwesomeIcon icon={faPhone} color='#202020' />
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className='p-2'>480.313.6648</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header className='p-1 w-auto d-flex justify-content-center'>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <FontAwesomeIcon icon={faEnvelope} color='#202020' />
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className='p-2'><a href="mailto:jon.hansen.dev@gmail.com">jon.hansen.dev@gmail.com</a></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default ContactCard
