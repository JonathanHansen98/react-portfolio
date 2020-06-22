import React from 'react';
import Nav from '../Topbar';
import Projects from './Projects'
import Contact from './Contact'
// import Contact from './Contact';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import mongoImg from '../../img/mongo.png';
import expressImg from '../../img/express.png';
import reactImg from '../../img/react.png';
import nodeImg from '../../img/node.png';
import Footer from '../Footer';

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
  const images = [
    {
    img: mongoImg
  },
    {
    img: expressImg
  },
    {
    img: reactImg
  },
    {
    img: nodeImg
  },
]
  const styles = {
    container: {
      minHeight: '750px'
    },
    content: {
      position: "absolute",
      top: "15%"
    },
    position: {
      position: 'relative'
    }
  }

  const Skewed = styled.div`
  background: ${props => props.background ? props.background : "#202020"};
  color: #ebebe3;
  background-position: center;
  background-size: cover;
  clip-path: ${props => {
      return props.bottom ? `polygon(
    0 0, /* left top */
    100% 0%, /* right top */ 
    100% 100%, /* right bottom */
    0 75% /* left bottom */
  );` : props.middle ? `polygon(
    100% 25%, /* left top */
    100% 100%, /* right top */ 
    0 75%, /* right bottom */
    0% 0% /* left bottom */
  );` : `polygon(
    0% 0%, /* left top */
    100% 25%, /* right top */ 
    100% 100%, /* right bottom */
    0% 100% /* left bottom */
  );`}} 
`
  const icon = {
    hidden: {
      fill: "transparent",
      stroke: "white",
      opacity: 0,
      pathLength: 0,
      pathOffset: 1,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0
    }
  }

  const svg = {
    hidden: {
      x: -250
    },
    visible: {
      x: 0
    }
  }

  return (
    <>
      <Skewed id='home' className='pt-5' bottom>
        <Container  style={styles.container}>
          <Row className='my-5 py-5'>
            <Col className='d-flex justify-content-center' md={6}>
              <motion.svg
                initial={svg.hidden}
                animate={svg.visible}
                transition={{ duration: 2 }}
                width="60%"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 312.39 294.21">

                <motion.path
                  d="M170,293.71a7.91,7.91,0,0,1-6.85-3.93l-1.1-1.91a8,8,0,0,1,2.9-10.81L293.85,202V116.65H18.53v88.21a7.91,7.91,0,0,1-7.9,7.91H8.4a7.92,7.92,0,0,1-7.9-7.91V13.19A8.7,8.7,0,0,1,9.18,4.5h.67a8.69,8.69,0,0,1,8.68,8.69V98.62H293.85V9.18A8.7,8.7,0,0,1,302.53.5h.67a8.7,8.7,0,0,1,8.69,8.68V206.87a8,8,0,0,1-1.82,5l-.09.1a7.82,7.82,0,0,1-2.24,2L174.09,292.6A8,8,0,0,1,170,293.71Z"
                  initial={icon.hidden}
                  animate={icon.visible}
                  transition={{ duration: 2, type: 'tween' }} />

              </motion.svg>
            </Col>
            <Col md={6}>
              <div className='d-flex flex-column justify-content-center align-items-center h-100 position-relative' style={styles.content}>
                <h1>Jonathan Hansen</h1>
                <h3 className='mb-5'>Full Stack Developer</h3>
                <p className="pt-md-5 mt-md-5 text-center">I am a software engineer, currently enrolled in UofA's full stack web development course. I have a background in design, and value minimalism and simplicity, in my designs as well as my code.
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
        <Row style={styles.position} className='p-5 d-flex justify-content-center'>
          {images.map((img, index) => {
            return (
              <Col key={index} className='p-5' xs={'auto'}>
              <img height='100px' src={img.img} alt="" />
              </Col>
            )
          })}
        </Row>
      </Skewed>

      <Container id='contact' style={styles.container}>
          <Contact />
      </Container>

      <Skewed>
        <Footer />
      </Skewed>
    </>
  )
};

export default App;
