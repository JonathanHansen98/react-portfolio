import React from 'react';
import { motion } from 'framer-motion';


const LogoAnimation = () => {
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
  )
}

export default LogoAnimation
