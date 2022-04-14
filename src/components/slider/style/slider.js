import styled from "styled-components/macro";


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