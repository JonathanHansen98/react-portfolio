import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

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
      <StyledBar className="fixed-top">
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
      </StyledBar>
    </div>
  );
};

export default Topbar;
