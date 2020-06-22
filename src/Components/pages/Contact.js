import React from 'react';
import ContactForm from '../ContactForm'
import { Row, Col, Card, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Row className="pb-md-5">
        <Col className='d-flex justify-content-center'>
          <h1>Contact</h1>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col xs={6}>
          <ContactForm />
        </Col>
      </Row>
    </div>
  )
}

export default Contact
