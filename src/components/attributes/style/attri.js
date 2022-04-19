import styled from 'styled-components/macro';
import { Media } from '../../mixins'

export const Container = styled.div`
   display: ${({ attrShow }) => (attrShow ? "block" : "none")}; 
   min-width: 400px !important;
`

export const Overlay = styled.div`
  max-width: 1440px;
  min-width: 400px !important;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0; 
  bottom: 0;
  z-index: 2;
  cursor: default;
  background-color: #39374838;
  width: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center;
`

export const Frame = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  min-width: 300px !important;
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  position: absolute; 
  z-index: 13;
  background-color: #fff;
  cursor: default;
  padding: 8px 16px;
  scroll-behavior: smooth;
`

export const ContainerBox = styled.div`
  font-weight: normal;
  align-self: flex-start;
`

export const Text = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 1.7rem;
  margin-top: 1rem;
  margin-bottom: .5rem
`
export const AttriContainer = styled.div`
  display: flex;      
`
export const Box = styled.div`
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
  margin-bottom: 1.7rem;    
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


export const AddToCart = styled.button`
  cursor: pointer;
  display: flex;
  justify-content:center;
  align-items: center; 
  font-weight: bold;
  font-size: 1.6rem;
  width: 100%;
  height: 4rem;
  color: #fff;    
  border: 1px solid #5ECE7B;
  background-color: #5ECE7B;
  margin-bottom: 2rem;
  -webkit-user-select: none;    
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
  &:hover{
  opacity: .5
  }
`


export const Cancel = styled.button`
  cursor: pointer;
  display: flex;
  justify-content:center;
  align-items: center; 
  font-weight: bold;
  font-size: 1.6rem;
  width: 100%;
  height: 4rem;
  color: #fff;    
  border: 1px solid #5ECE7B;
  background-color: #5ECE7B;
  margin-bottom: 2rem;
  -webkit-user-select: none;    
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
  &:hover{
  opacity: .5
  }
`