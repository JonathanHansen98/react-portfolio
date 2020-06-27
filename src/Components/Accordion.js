import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AccordionIcon } from './StyledElements'

const Accordion = ({icon, children}) => {
  const [isToggled, setToggle] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      x: 0
    },
    closed: {
      opacity: 0,
      x: 20
    },
    exit: {
      x: -30,
      opacity: 0,
      transition: {
        duration: .2
      }
    }
  };
  return (
    <>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="exit"
            className='d-flex align-items-center pr-2'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <article>
        <AccordionIcon icon={icon} size='2x' color='#202020' onClick={() => setToggle(!isToggled)} />
      </article>
    </>
  );
};

export default Accordion;
