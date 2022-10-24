import styled from 'styled-components/macro';
import { Media } from '../../mixins'
import { keyframes } from 'styled-components';


const SlideIn = keyframes`
  0% {
    left: -60rem;
  }
  100% {
    left: 0;
  }`

export const Container = styled.div` 
  position: fixed;
  top: 0; 
  bottom: 0; 
  left: 0; 
  right: 0;
  background-color: #39374838;
  z-index: 500;
  animation: ${SlideIn} 1s ease-in 2s;
`;