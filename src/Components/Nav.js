import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'

const Nav = ({ isNavOpen, setNavOpen, project }) => {
  const MenuNav = styled(motion.div)`
  z-index: 1;
  color:white;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(32, 32, 32, 0.9);
  overflow-Y: auto;
  ul {
    list-style: none;
  }
  li, ul {
    padding: 0;
    margin: 0;
    a {
      color: white;
      font-size: 2rem;
    }
  }
  `

  const IconLink = styled(motion.a)`
  color: #ebebe3;

  &:hover {
    color: white;
  }
  `

  const ProjectHeader = styled(motion.h2)`
  font-size: 2rem;
  `
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .3,
        when: 'beforeChildren',
        staggerChildren: .3
      }
    },
    closed: {
      opacity: 1,
      x: 450
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: .5
      }
    }
  }

  const ImageHeader = styled(motion.img)`
    width: 60%;
  `
  const DescriptionCard = styled(motion.div)`
    width: 100%;
    background: rgba(0,0,0, .3);
    border-radius: 5px;
    padding: 1rem;
    align-self: center;
  `

  const ProjectDesciption = styled(motion.p)`
    font-size: 1.5rem;
    margin: 0;
    
  `

  const listItemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 7
      }
    },
    closed: {
      opacity: 0,
      x: 20
    },
    exit: {
      opacity: 0,
      x: 20
    }    
  }

  return (
    <AnimatePresence>
      {isNavOpen && (
        < MenuNav
        className='p-2 p-md-3 w-75 vh-100'
          key='modal'
          variants={variants}
          initial='closed'
          animate='open'
          exit='exit'
        >
      <Container className='h-100' fluid>
        <Row>
          <Col>
           <FontAwesomeIcon onClick={() => {
             setNavOpen(false)
           }} className='float-right' icon={faTimes} color='red' size='2x' />

          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectHeader className='mb-1 mb-md-3' variants={listItemVariants}>{project.name}</ProjectHeader>
          </Col>
        </Row>

        <Row>
          <Col className='d-flex justify-content-center'>
            <ImageHeader alt="Project Header" variants={listItemVariants} src={project.img} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DescriptionCard className='mt-2 mt-md-3' variants={listItemVariants}>
              <ProjectDesciption >{project.about}</ProjectDesciption>
            </DescriptionCard>
          </Col>
        </Row>
        <Row className='py-3 pt-md-5 d-flex justify-content-around'>
          <Col xs={'auto'}>
            <IconLink name='icon' target="_blank" variants={listItemVariants} href={project.deployed}>
              <FontAwesomeIcon size={'3x'} icon={faRocket} />
            </IconLink>
          </Col>
          <Col xs={'auto'}>
            <IconLink name='icon' target="_blank" variants={listItemVariants} href={project.github}>
              <FontAwesomeIcon size={'3x'} icon={faGithub} />
            </IconLink>
          </Col>
        </Row>
      </Container>

        </MenuNav>
  )
}
    </AnimatePresence >
  )
}

export default Nav
