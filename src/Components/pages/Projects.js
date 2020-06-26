import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import burgerImg from '../../img/burger.PNG';
import lockdImg from '../../img/lockd.PNG';
import calculatorImg from '../../img/calculator.PNG';
import plannerImg from '../../img/planner.PNG';
import quizImg from '../../img/quiz.PNG';
import thriveImg from '../../img/thrive.PNG';
import lockdCard from '../../img/cards/lockd-card.png'
import thriveCard from '../../img/cards/thrive-card.png'
import calCard from '../../img/cards/cal-card.png'
import burgerCard from '../../img/cards/burger-card.png'
import quizCard from '../../img/cards/quiz-card.png'
import scheduleCard from '../../img/cards/scheduler-card.png'
import Nav from '../Nav';
import styled from 'styled-components'


const Projects = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [navData, setNavData] = useState({})

  document.body.addEventListener('click', e => {
    if (isNavOpen === true) {
      setNavOpen(false)
    }
  })
  const StyledImg = styled.img`
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
  `

  const projects = [
    {
      cardImg: lockdCard,
      img: lockdImg,
      name: 'Lock\'d',
      about: 'Lock\'d was my second project during my bootcamp and is one of my favorites. This full stack app allows users to save passwords, which are encrypted and stored in a MySql database. Users can also generate random passwords and check if their passwords have been pwned.',
      deployed: 'https://universal-storage.herokuapp.com/',
      github: 'https://github.com/schwynf/Universal-Storage'
    },
    {
      cardImg: calCard,
      img: calculatorImg,
      name: 'Cal.Culator',
      about: 'For project 1, my team and I came up with the idea of creating an app that suggested meals to a user based on their input, and calculate the combined calories and macro nutrients for each meal they selected.',
      deployed: 'https://jonathanhansen98.github.io/nutrition-calculator',
      github: 'https://github.com/JonathanHansen98/nutrition-calculator'
    },
    {
      cardImg: thriveCard,
      img: thriveImg,
      name: 'Thrive',
      about: 'My first commercial job, I decided to take on react for the learning experience and create this website for thrive detailing. It\'s still a work in progress, but I\'m proud of what I have accomplished in such a short amount of time.',
      deployed: 'https://thrive-detailing.netlify.app/',
      github: 'https://github.com/JonathanHansen98/thrive-detailing'
    },
    {
      cardImg: burgerCard,
      img: burgerImg,
      name: 'Eat Da Burger',
      about: 'A full stack web app that uses MySQL, Express, Node.js, and Handlebars. User\'s can interact with a database to addburgers to devour, when devoured, the burgers will show under the \'devoured section\'.',
      deployed: 'https://eat-das-burger.herokuapp.com/',
      github: 'https://github.com/JonathanHansen98/burger-homework'
    },
    {
      cardImg: scheduleCard,
      img: plannerImg,
      name: 'Work Day Scheduler',
      about: 'This work day planner allows the user to input reminders for certain timeblocks of the day, the time blocks are color coded for past present and future, and the reminders the user inputs persists when the page is reloaded.',
      deployed: 'https://jonathanhansen98.github.io/planner-homework',
      github: 'https://github.com/JonathanHansen98/planner-homework'
    },
    {
      cardImg: quizCard,
      img: quizImg,
      name: 'Space Quiz',
      about: 'One of my first homework assignments that I was really proud of was this space quiz. I mean just look at that UI! User\'s race against the clock in a space themed quiz, they are then able to post their results to a local storage leaderboard.',
      deployed: 'https://universal-storage.herokuapp.com/',
      github: 'https://github.com/schwynf/Universal-Storage'
    },
  ]
  return (
    <div className='h-100'>
      <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} project={navData} />

      <Row className="pb-md-5 h-100">
        <Col >
          <h1 className='text-center'>Projects</h1>
          <Row className='h-100 d-flex justify-content-center align-items-center'>
            {projects.map((project,index) => {
              return (
                <Col key={index} className='p-2 pb-5' xs={12} md={4}>
                  <StyledImg
                    variant="top"
                    src={project.cardImg}
                    width='100%'
                    onClick={() => {
                      setNavData(project)
                      setNavOpen(true);
                    }}
                  />
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
