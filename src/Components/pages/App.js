import React from 'react';
import Nav from '../Topbar';
import Projects from './Projects'
import Contact from './Contact'
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MernRow from '../MernRow';
import Footer from '../Footer';
import Logo from '../LogoAnimation';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/*' component={Home} exact />
        </Switch>
      </div>
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

  const Skewed = styled.div`
  background: ${props => 
  props.background ? props.background : "#202020"};
  color: #ebebe3;
  background-position: center;
  background-size: cover;
  clip-path: ${props => {
      return props.bottom ? `polygon(
    0 0, /* left top */
    100% 0%, /* right top */ 
    100% 100%, /* right bottom */
    0 85% /* left bottom */
  );` : props.middle ? `polygon(
    0% 0%, /* left top */
    100% 15%, /* right top */ 
    100% 100%, /* right bottom */
    0% 85% /* left bottom */
  );` : `polygon(
    0% 0%, /* left top */
    100% 15%, /* right top */ 
    100% 100%, /* right bottom */
    0% 100% /* left bottom */
  );`}} 
`
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
                <p className="pt-md-5 mt-md-5 my-3 text-center">I am a software engineer, currently enrolled in UofA's full stack web development course. I have a background in design, and value minimalism and simplicity, in my designs as well as my code.
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


        <Footer />
    </>
  )
};

export default App;
