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
`;

export const Frame = styled.div`
  width: 395px;
  display: flex;
  height: 100%;
`

export const Sidebar = styled.div`
  height: 100%;
  background-color: #fff;
  flex-grow: 1;
`
export const Cancel = styled.div`
  color: #fff;
  font-size: 3.5rem;
  margin: .3rem 1rem;
  cursor: pointer;
`

export const TopBar = styled.div`
  background-color: #5ECE7B;
  width: 100%;
  height: 5rem;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  display: flex; 
  justify-content: center; 
  align-items: center;
  user-select: none;
  & svg{
    width: 2rem;
    fill: #fff;
  }
  & span{
    margin-left: 0.9rem
  }
`
export const Content = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 2rem 1rem 5rem;
`

export const Item = styled.div`
    margin: 1.5rem 0
  `

export const AttriText = styled.h2`
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 1.7rem;
    margin-bottom: .5rem
  `
export const Attributes = styled.div`
  display: flex;      
`

export const ColorBox = styled.div`
    line-height: 22.4px;
    font-size: 1.6rem;
    font-family: 'Source Sans Pro', sans-serif;
    min-width: 3.2rem;
    height: 2.5rem;
    display: flex;
    justify-content:center; 
    align-items: center;  
    padding: .4rem .4rem; 
    margin-right: 1rem;    
    margin-bottom: 3rem;    
    border: 1px solid #1D1F22;
    opacity: .4;
    margin-top:.3rem;
    background-color: ${({ selected, text }) => (selected && text && "#1D1F22")}; 
    opacity: ${({ selected, text }) => (selected && text && 1)}; 
    color: ${({ selected, text }) => (selected && text && '#fff')}; 
    opacity: ${({ displayValue }) => (displayValue && .3)}; 
    opacity: ${({ selected, displayValue }) => (selected && displayValue && 1)}; 
    transform: ${({ selected, displayValue }) => (selected && displayValue && 'scale3d(1.2, 1.2, 1.2)')}; 
    background-color: ${({ displayValue }) => (displayValue && displayValue)}; 
    border: ${({ displayValue }) => (displayValue === "#FFFFFF" ? '1px solid #1D1F22' : displayValue)}; 
    ${Media('min-width', "500px", ['height: 2.9rem; min-width: 3.5rem;'])};
    ${Media('min-width', "530px", ['height: 3.2rem; min-width: 4.5rem;'])};
    -webkit-user-select: none;    
    -moz-user-select: none; 
    -ms-user-select: none;
    cursor: pointer;
`

export const Checkbox = styled.input`
`

export const Select = styled.select`
`
export const Option = styled.option``