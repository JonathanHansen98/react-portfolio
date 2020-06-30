import React from 'react'
import mongoImg from '../img/mongo.png';
import expressImg from '../img/express.png';
import reactImg from '../img/react.png';
import nodeImg from '../img/node.png';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';


const MernRow = () => {
  const variants = {
    still: {
      y: 0,
      scale: 1
    },
    moving: {
      y: [10, -10],
      scale: 1.05
    }
  }

<<<<<<< HEAD
    const sequence = async () => {
      await controls.start({
        y: [-25, 25],
        scale: 1.05
      }
      )
    };
    sequence()
=======
>>>>>>> 43d1d74dbd5772d917b0e3924a394f9eed7423f8
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

  return (
    <div>
      <Row style={{position:'relative'}} className='p-5 d-flex justify-content-center'>
        {images.map((img, index) => {
          return (
            <Col key={index} className='p-5' xs={'auto'}>
<<<<<<< HEAD
              <motion.img transition={{yoyo: Infinity, ease: [0.445, 0.05, 0.55, 0.95], delay: index * .1, duration: 1.5}} custom={index} animate={controls}  height='100px' src={img.img} alt="" />
=======
              <motion.img transition={{ yoyo: Infinity, ease:[0.445,0.05,0.55,0.95], delay: index * .3, duration: 1.5 }} variants={variants} intial='still' animate='moving' height='100px' src={img.img} alt="" />
>>>>>>> 43d1d74dbd5772d917b0e3924a394f9eed7423f8
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default MernRow
