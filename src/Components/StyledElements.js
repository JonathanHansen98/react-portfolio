import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MenuNav = styled(motion.div)`
  z-index: 1;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(32, 32, 32, 0.9);
  overflow-y: auto;
  ul {
    list-style: none;
  }
  li,
  ul {
    padding: 0;
    margin: 0;
    a {
      color: white;
      font-size: 2rem;
    }
  }
`;
export const IconLink = styled.a`
  color: #212529;
  &:hover {
    color: #454545;
  }
`;
export const ProjectHeader = styled(motion.h2)`
  font-size: 2rem;
`;
export const ImageHeader = styled(motion.img)`
  @media (max-width: 575px) {
    width: 100%;
  }
  width: 60%;
`;
export const DescriptionCard = styled(motion.div)`
  @media (max-width: 575px) {
    height: 30rem;
  }

  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 1rem;
  align-self: center;
  height: 12rem;
  overflow: auto;
`;
export const ProjectDesciption = styled(motion.p)`
  font-size: 1.5rem;
  margin: 0;
`;
export const StyledImg = styled.img`
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`;
export const Skewed = styled.div`
  background: ${(props) => (props.background ? props.background : "#202020")};
  color: #ebebe3;
  background-position: center;
  background-size: cover;
  clip-path: ${(props) => {
    return props.bottom
      ? `polygon(
  0 0, /* left top */
  100% 0%, /* right top */ 
  100% 100%, /* right bottom */
  0 75% /* left bottom */
);`
      : props.middle
      ? `polygon(
  0% 0%, /* left top */
  100% 25%, /* right top */ 
  100% 100%, /* right bottom */
  0% 75% /* left bottom */
);`
      : `polygon(
  0% 0%, /* left top */
  100% 25%, /* right top */ 
  100% 100%, /* right bottom */
  0% 100% /* left bottom */
);`;
  }};
`;

export const ContactButton = styled.button`
  display: block;
  width: 100%;
  color: #202020;
  background-color: white;
  border: 1px solid #ced4da;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    border-color: black;
  }
  &:active {
    border-color: black;
  }
  &hover: {
    background-color:: red;
  }
`;

export const HoverIcon = styled(FontAwesomeIcon)`
  color: #161616;
  &:hover {
    cursor: pointer;
    color: #323232;
  }
`

export const StyledBar = styled.div`
background-color: #ebebe3;
position: relative;
top:0;
left: 0;
`;
