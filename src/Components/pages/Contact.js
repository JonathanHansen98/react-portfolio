import React from "react";
import ContactForm from "../ContactForm";
import { Row, Col } from "react-bootstrap";
import { IconLink } from '../StyledElements';
import Accordion from "../Accordion";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>Contact</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <p>jonhansen.dev@gmail.com</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={6}>
          <ContactForm />
          <Row>
            <Col>
              <Row className='mt-2'>
                <Col className="d-flex justify-content-end">
                  <Accordion icon={faPhone}> 480.313.6648 </Accordion>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
