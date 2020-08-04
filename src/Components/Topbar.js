import React from "react";
import { Navbar, Nav, Col } from "react-bootstrap";

const Topbar = () => {
  const styles = {
    darnkText: {
      color: "#4a4a48",
    },
  };

  return (
    <div>
        <Navbar style={{backgroundColor: '#ebebe3'}} sticky='top'>
          <Col className='d-flex justify-content-around' xs={6}>
            <Navbar.Brand
              className="hvr-forward"
              style={styles.darnkText}
              href="#home"
            >
              Home
          </Navbar.Brand>
            <Nav.Link
              className="hvr-forward"
              style={styles.darnkText}
              href="#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="hvr-forward"
              style={styles.darnkText}
              href="#contact"
            >
              Contact
            </Nav.Link>

          </Col>
        </Navbar>
    </div>
  );
};

export default Topbar;
