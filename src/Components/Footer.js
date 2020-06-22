import React from 'react'
import { Row, Col  } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <div>
      <Row className='py-3 mx-0'>
        <Col xs='auto'>
          <a href="https://github.com/jonathanhansen98"><FontAwesomeIcon color='#ebebe3' className='my-2 mx-3 hvr-forward' icon={faGithubSquare} size='3x' /></a>
          <a href="https://www.linkedin.com/in/jon-hansen-dev/"><FontAwesomeIcon color='#ebebe3' className='my-2 mx-3 hvr-forward' icon={faLinkedinIn} size='3x' /></a>
          <a href="https://drive.google.com/file/d/1nB_vWYoHB0kE-atxyoWhnPc94TnXapv5/view?usp=sharing"><FontAwesomeIcon color='#ebebe3' className='my-2 mx-3 hvr-forward' icon={faFilePdf} size='3x' /></a>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
