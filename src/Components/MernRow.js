import React from 'react'
import mongoImg from '../img/mongo.png';
import expressImg from '../img/express.png';
import reactImg from '../img/react.png';
import nodeImg from '../img/node.png';
import { Row, Col } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';


const MernRow = () => {
  const controls = useAnimation();

    const sequence = async () => {
      await controls.start({
        y: [-25, 25],
        scale: 1.05
      }
      )
    };
    sequence()
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
              <motion.img transition={{yoyo: Infinity, ease: [0.445, 0.05, 0.55, 0.95], delay: index * .1, duration: 1.5}} custom={index} animate={controls}  height='100px' src={img.img} alt="" />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default MernRow
