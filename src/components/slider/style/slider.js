import styled from "styled-components/macro";
import { keyframes } from 'styled-components';


export const ImageContainer = styled.div`
  position: relative;
  border: 0;
  -webkit-user-select: none;    
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
  &.active{
    display: block
  }
  &.nonactive{
    display: none
  }
`
export const Image = styled.img` 
  width: 14.1rem;
  height: 18.5rem; 
  border: 0;
`

export const ToggleLink = styled.a`
  & a{
    all: unset
  }
  font-size: 1.5rem;
  color: #fff;
   position: absolute;  
   cursor: pointer;
  top: 44%;
  left: 2%;
  text-shadow: 2px 2px 5px #000;
  &#right{
    left: 87%
  }
  `
  const SlideIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`

export const InStock = styled.span`
  display:  block;
  position: absolute;
  top: 40%;
  left: 10%;
  font-size: 1.5rem;
  color: #8D8F9A;
  -webkit-user-select: none;    
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  transition: all .1s;
  animation: ${SlideIn} .005s ease-in 0s
`