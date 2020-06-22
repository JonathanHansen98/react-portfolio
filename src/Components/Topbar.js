import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
const Topbar = () => {
  const styles = {
    darnkText: {
      color: "#4a4a48",
    },
  };
  const StyledBar = styled.div`
    background-color: #ebebe3;
  `;
  return (
    <div>
      <StyledBar className="fixed-top d-flex flex-row">
        <Navbar>
          <Navbar.Brand
            className="hvr-forward"
            style={styles.darnkText}
            href="#home"
          >
            Home
          </Navbar.Brand>
          <Nav className="mr-auto">
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
          </Nav>
        </Navbar>
        <div className="w-100 d-inline-flex justify-content-end">
          <Col xs="auto">
            <a href="https://github.com/jonathanhansen98">
              <FontAwesomeIcon
                color="#202020"
                className="m-2 hvr-forward"
                icon={faGithubSquare}
                size="2x"
              />
            </a>
          </Col>

          <Col xs="auto">
            <a href="https://www.linkedin.com/in/jon-hansen-dev/">
              <FontAwesomeIcon
                color="#202020"
                className="m-2 hvr-forward"
                icon={faLinkedinIn}
                size="2x"
              />
            </a>
            </Col>
            <Col className='pr-0' xs="auto">
            <a href="https://drive.google.com/file/d/1nB_vWYoHB0kE-atxyoWhnPc94TnXapv5/view?usp=sharing">
              <FontAwesomeIcon
                color="#202020"
                className="m-2 hvr-forward"
                icon={faFilePdf}
                size="2x"
              />
            </a>
            </Col>
        </div>
      </StyledBar>
    </div>
  );
};

export default Topbar;
