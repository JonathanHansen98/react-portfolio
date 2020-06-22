import React from "react";
import { Row, Col, Card, Button, Accordion } from "react-bootstrap";
import burgerImg from '../../img/burger.PNG';
import lockdImg from '../../img/lockd.PNG';
import calculatorImg from '../../img/calculator.PNG';
import plannerImg from '../../img/planner.PNG';
import quizImg from '../../img/quiz.PNG';
import thriveImg from '../../img/thrive.PNG';

const Projects = () => {
  const styles = {
    card: {
      width: '20rem',
      minHeight: '360px',
      backgroundColor: '#202020',
      color: '#ebebe3',
      textDecoration: 'none'
  },
  link : {
    color: '#ebebe3',
    textDecoration: 'none'
  },
  accordion : {
    backgroundColor: '#202020',
    color: '#ebebe3',
    textDecoration: 'none'
  }
}

  const projects = [
    {
      img: lockdImg,
      name: 'Lock\'d',
      about: 'Password Manager',
      deployed: 'https://universal-storage.herokuapp.com/',
      github: 'https://github.com/schwynf/Universal-Storage'
    },
    {
      img: calculatorImg,
      name: 'Cal.Culator',
      about: 'For project 1, my team and I came up with the idea of creating an app that suggested meals to a user based on their input, and calculate the combined calories and macro nutrients for each meal they selected.', 
      deployed: 'https://jonathanhansen98.github.io/nutrition-calculator', 
      github: 'https://github.com/JonathanHansen98/nutrition-calculator'
    },
    {
      img: thriveImg,
      name: 'Thrive',
      about: 'My first commercial job, I decided to take on react for the learning experience and create this website for thrive detailing. It\'s still a work in progress, but I\'m proud of what I have accomplished in such a short amount of time.',
      deployed: 'https://thrive-detailing.netlify.app/',
      github: 'https://github.com/JonathanHansen98/thrive-detailing'
    },
    {
      img: burgerImg,
      name: 'Eat Da Burger',
      about: 'A full stack web app that uses MySQL, Express, Node.js, and Handlebars. User\'s can interact with a database to addburgers to devour, when devoured, the burgers will show under the \'devoured section\'.',
      deployed: 'https://eat-das-burger.herokuapp.com/',
      github: 'https://github.com/JonathanHansen98/burger-homework'
    },
    {
      img: plannerImg,
      name: 'Work Day Scheduler',
      about: 'This work day planner allows the user to input reminders for certain timeblocks of the day, the time blocks are color coded for past present and future, and the reminders the user inputs persists when the page is reloaded.',
      deployed: 'https://jonathanhansen98.github.io/planner-homework',
      github: 'https://github.com/JonathanHansen98/planner-homework'
    },
    {
      img: quizImg,
      name: 'Space Quiz',
      about: 'One of my first homework assignments that I was really proud of was this space quiz. I mean just look at that UI! User\'s race against the clock in a space themed quiz, they are then able to post their results to a local storage leaderboard.',
      deployed: 'https://universal-storage.herokuapp.com/',
      github: 'https://github.com/schwynf/Universal-Storage'
    },
  ]
  return (
    <div>
      <Row className="pb-md-5">
        <Col className='d-flex justify-content-center'>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row >
        {projects.map((project, index) => {
          return (
            <Col className='p-2 pb-5  d-flex justify-content-center' md={4} key={index}>
            <Accordion>
              <Card className="text-center" style={styles.card}>
                <Card.Img
                  variant="top"
                  src={project.img}
                />
                <Card.Header>
                  
                    <h3 style={styles.link} > {project.name} </h3>
                  
                </Card.Header>
  
                <Card.Header>
                  <Accordion.Toggle style={styles.link} as={Button} variant="link" eventKey="0">
                    About
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>{project.about}</Card.Body>
                </Accordion.Collapse>
                <Card style={styles.accordion}>
                  <Card.Header>
                    <Accordion.Toggle style={styles.link} as={Button} variant="link" eventKey="1">
                      Project Links
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <a style={styles.link} target='_blank' rel="noopener noreferrer" href={project.github}>Github</a>
                      <br/>
                      <a style={styles.link} target='_blank' rel="noopener noreferrer" href={project.deployed}>Deployed</a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Card>
            </Accordion>
          </Col>
          )
        })}
       
      </Row>
    </div>
  );
};

export default Projects;
