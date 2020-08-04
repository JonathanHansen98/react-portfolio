import React from 'react';
import Nav from '../Topbar';
import Projects from './Projects'
import Contact from './Contact'
<<<<<<< HEAD
import styled from 'styled-components';
=======
>>>>>>> 43d1d74dbd5772d917b0e3924a394f9eed7423f8
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MernRow from '../MernRow';
import Footer from '../Footer';
import Logo from '../LogoAnimation';
import { Skewed } from '../StyledElements';

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path='/*' component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

const Home = () => {
  const styles = {
    container: {
      minHeight: '750px'
    },
    content: {
      position: "absolute",
      top: "15%"
    }
  }

  return (
    <>
      <Skewed id='home' className='pt-5' bottom>
        <Container  style={styles.container}>
          <Row className='my-md-5 py-md-5 my-3 py-4'>
            <Col className='d-flex justify-content-center' md={6}>
              <Logo />
            </Col>
            <Col md={6}>
              <div className='d-flex flex-column justify-content-center align-items-center h-100 position-relative' style={styles.content}>
                <h1 className='text-center'>Jonathan Hansen</h1>
                <h3 className='mb-md-5 mb-3'>Full Stack Developer</h3>
                <p className="pt-md-5 mt-md-5 my-3 text-center">I am a software engineer, recently graduated from the UofA Full Stack Web Development Boot Camp. I have a background in design, and value minimalism and simplicity, in my designs as well as my code.
               </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Skewed>

      <Container id='projects' style={styles.container}>
        <Projects />
      </Container>

      <Skewed className='p-5 mt-5' middle>
        <MernRow />
      </Skewed>

      <Container id='contact' style={styles.container}>
          <Contact />
      </Container>

    </>
  )
};

export default App;
