import React from 'react'
import mongoImg from '../img/mongo.png';
import expressImg from '../img/express.png';
import reactImg from '../img/react.png';
import nodeImg from '../img/node.png';
import { Row, Col } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';


const MernRow = () => {
  const variants = {
    still: {
      y: 0,
      scale: 1
    },
    moving: {
      y: [10, 0, -10],
      scale: 1.05
    }
  }
  const controls = useAnimation();

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
    position: {
      position: 'relative'
    }
  }
  return (
    <div>
      <Row style={styles.position} className='p-5 d-flex justify-content-center'>
        {images.map((img, index) => {
          return (
            <Col key={index} className='p-5' xs={'auto'}>
              <motion.img transition={{ yoyo: Infinity, ease:'linear', delay: index * .5, duration: 1 }} variants={variants} intial='still' animate='moving' height='100px' src={img.img} alt="" />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default MernRow
