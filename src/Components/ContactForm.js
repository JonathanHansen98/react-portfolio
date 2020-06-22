import React from 'react'
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="John Smith" />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name="phone" type="text" placeholder="123-456-7890" />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control name='subject' as="select">
            <option value='Employment'>Employment</option>
            <option value='Collaboration'>Collaboration</option>
            <option value='Personal'>Personal</option>
            <option value='Other'>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label >Message</Form.Label>
          <Form.Control name='messaage' as="textarea" rows="3" />
        </Form.Group>
        <Button type="submit" block> Submit </Button>
        <Form.Text>
          Please allow up to 48 hours for a response. Thank you!
        </Form.Text>
      </Form>
    </div>
  )
}

export default ContactForm
