import styled from "styled-components/macro"
import { Media } from '../../mixins'

export const Container = styled.div``

export const Header = styled.h1`
  font-size: 2.3rem;
  margin-top: 5rem;
  margin-bottom: 5rem;  
  `

export const Frame = styled.div`
  max-width: 90vw;
  ${Media('max-width', "399px", ['padding:0 1.5rem'])};
  ${Media('min-width', "400px", ['padding:0 4.5rem'])};  
  ${Media('min-width', "650px", ['padding:0 6.0rem'])};  
  ${Media('min-width', "750px", ['padding:0 8.8rem'])};
`
export const Item = styled.div`
  display: ${({ hide }) => (hide ? "none" : "flex")};  
  justify-content: space-between; 
  align-items: center;
  height: 22rem;    
  padding: 1rem 0;
  border-top: 1px solid #E5E5E5;  
  &{
    border-bottom: 1px solid #E5E5E5;
  }
  `

export const ColumnOne = styled.div`
  display: flex;
  height: 18.5rem;
  flex-direction: column;
  font-size: 1.8rem;
  justify-content: space-between;
  overflow-y: scroll;
  scrollbar-width: none; 
  -ms-overflow-style: none;  
  &::-webkit-scrollbar { 
  width: 0;
  height: 0;
  }  
  scroll-behavior: smooth;
`
export const Name = styled.p`
  line-height: 27px;
  font-weight: bold;
  &#brand{
  margin-bottom: 1.5rem;
  font-weight: normal
  }
`
export const Price = styled.div`
  font-weight: bold;
  line-height: 7px;  
  margin-bottom: 1.5rem;
`
export const Attributes = styled.div`  
  display: flex;  
  flex-wrap: wrap;  
`

export const Box = styled.div`
  line-height: 22.4px;
  font-size: 1.6rem;
  font-family: 'Source Sans Pro', sans-serif;
  min-width: 3.5rem;
  height: 2.8rem;
  display: flex;
  justify-content:center; 
  align-items: center;  
  padding: 0 .4rem; 
  margin-right: 1.2rem;    
  border: 1px solid #1D1F22;
  opacity: .7;
  background-color: ${({ selected, text }) => (selected && text && "#1D1F22")}; 
  opacity: ${({ selected, text }) => (selected && text && 1)}; 
  opacity: ${({ selected, displayValue }) => (selected && displayValue && 1)}; 
  opacity: ${({ displayValue }) => (displayValue && .4)}; 
  background-color: ${({ displayValue }) => (displayValue && displayValue)}; 
  border: ${({ displayValue }) => (displayValue === "#FFFFFF" ? '1px solid #1D1F22' : displayValue)};  
`

export const ColumnTwo = styled.div`
  display: flex;  
  & span#imageBox{
    position: relative
  }
`

export const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  line-height: 38.4px;
  margin-right: 1.2rem; 
`

export const AddSign = styled.div`
  cursor: pointer;
  font-size: 3rem; 
  width: 3.5rem;
  height: 3.1rem;
  display: flex;
  justify-content:center;
  align-items: center; 
  border: 1px solid #1D1F22;
  -webkit-user-select: none;    
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
  opacity: .7;
`

export const ValueSign = styled.div`
  font-size: 2rem;
  font-weight: bold;  
  margin: auto;
`
export const SubSign = styled.div`
  cursor: pointer;
  font-size: 3rem;
  width: 3.5rem;
  height: 3.1rem;
  display: flex;
  justify-content: center;
  align-items: center; 
  border: 1px solid #1D1F22;
  -webkit-user-select: none;    
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
  opacity: .7;
`
export const Image = styled.img`
  width: 14.1rem;
  height: 18.5rem; 
`
export const Total = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: bold;
  line-height: 30px;
`
export const TotalName = styled.span``
export const TotalValue = styled.span``

export const CheckOutBox = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 25px;

  & a{
    all: unset
  }
`

export const CheckOut = styled.div`
  cursor: pointer;
  display: flex;
  justify-content:center;
  align-items: center; 
  width: 15.5rem;
  height: 5.6rem;
  color: #fff;    
  border: 1px solid #5ECE7B;
  background-color: #5ECE7B;
  margin-bottom: 25rem;

  &:hover{
    opacity: .5
  }
  `
export const ToggleLink = styled.a`
  & a{
    all: unset
  }
  font-size: 1.5rem;
  color: #fff;
   position: absolute;  
  top: 44%;
  left: 3%;
  &#right{
    left: 85%
  }
  `