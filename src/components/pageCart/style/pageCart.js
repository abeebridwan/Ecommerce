import styled from "styled-components"

export const Container = styled.div``

export const Header = styled.h2`
  margin-top: 8rem;
`


export const Frame = styled.div``

export const Item = styled.div`
  display: ${({ hide }) => (hide ? "none" : "flex")}; 
  max-width: 109.97rem
  height: 22.6rem; 
  margin-top: 5.9rem;  
  margin-bottom: 4.1rem;
  &:last-child{
    margin-bottom: 0    
  }`

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
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
  &#brand{
    margin-top: 1rem;
  }
`
export const Price = styled.div`
  font-weight: bold;
  line-height: 7px;  
`
export const Attributes = styled.div`  
  display: flex;  
`

export const Box = styled.div`
  line-height: 22.4px;
  font-size: 1.6rem;
  font-family: 'Source Sans Pro', sans-serif;
  width: 6.3rem;
  height: 4.5rem;
  display: flex;
  justify-content:center;
  align-items: center;   
  margin-right: 1.2rem;    
  border: 1px solid #1D1F22;
  opacity: ${({ selected, displayValue }) => (selected && displayValue ? 1 : .4)}; 
  background-color: ${({ displayValue }) => (displayValue && displayValue)}; 
  border: ${({ displayValue }) => (displayValue === "#FFFFFF" ? '1px solid #1D1F22' : displayValue)};  
`

export const ColumnTwo = styled.div`
  display: flex;  
`

export const SignBox = styled.div`
  margin-right: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 38.4px;
`

export const AddSign = styled.div`
  cursor: pointer;
  font-size: 3rem; 
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content:center;
  align-items: center; 
  border: 1px solid #1D1F22;
`

export const ValueSign = styled.div`
  font-size: 3rem;
  font-weight: 500;  
  margin: auto;
`
export const SubSign = styled.div`
  cursor: pointer;
  font-size: 3rem;
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center; 
  border: 1px solid #1D1F22;
`
export const Image = styled.img`
  width: 14.1rem;
  height: 18.5rem;
`
export const Total = styled.div`
  margin-top: 3rem;
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
  justify-content: space-between;
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
  width: 20.5rem;
  height: 25.6rem;
  color: #fff;    
  border: 1px solid #5ECE7B;
  background-color: #5ECE7B;
  &:hover{
    opacity: .5
  }
  `