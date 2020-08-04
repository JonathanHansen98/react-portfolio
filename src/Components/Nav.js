import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'
import { MenuNav, IconLink, ProjectHeader, ImageHeader, ProjectDesciption, DescriptionCard } from './StyledElements';
const Nav = ({ isNavOpen, setNavOpen, project }) => {
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

  const childVariants = {
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 9
      }
    },
    closed: {
      opacity: 0,
      x: 35,
      scale: 1.09
    },
    exit: {
      opacity: 0,
      x: 35
    }
  }

  return (
    <AnimatePresence>
      {isNavOpen && (
        < MenuNav
          className='p-0 p-md-3 w-75 vh-100'
          key='modal'
          variants={variants}
          initial='closed'
          animate='open'
          exit='exit'
        >
          <Container className='h-100 d-flex flex-column justify-content-around' fluid>
            <Row >
              <Col>
                <ProjectHeader className='mb-0 mb-md-3' variants={childVariants}>{project.name}</ProjectHeader>
              </Col>
              <Col xs={'auto'}>
                <FontAwesomeIcon onClick={() => {
                  setNavOpen(false)
                }} className='float-right' icon={faTimes} color='red' size='2x' />
              </Col>
            </Row>

            <Row>
              <Col className='d-flex justify-content-center'>
                <ImageHeader alt="Project Header" variants={childVariants} src={project.img} />
              </Col>
            </Row>
            <Row>
              <Col>
                <DescriptionCard className='mt-0 mt-md-3' variants={childVariants}>
                  <ProjectDesciption  >{project.about}</ProjectDesciption>
                </DescriptionCard>
              </Col>
            </Row>
            <Row className='py-0 pt-md-5 d-flex justify-content-around'>
              <Col xs={'auto'}>
                <IconLink name='icon' target="_blank" variants={childVariants} href={project.deployed}>
                  <FontAwesomeIcon size={'3x'} color='#ebebe3' icon={faRocket} />
                </IconLink>
              </Col>
              <Col xs={'auto'}>
                <IconLink name='icon' target="_blank" variants={childVariants} href={project.github}>
                  <FontAwesomeIcon size={'3x'} color='#ebebe3' icon={faGithub} />
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
