import styled from 'styled-components/macro'

export const Container = styled.div`

`

export const HeaderOverlay = styled.div`
  max-width: 1440px;
  margin: auto;
  position: fixed;
  width: 100%;
  height: 7.8rem;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: transparent;
  cursor: default;
  display: ${({ cartshow }) => (cartshow ? "block" : "none")};
`
export const Overlay = styled.div`
  max-width: 1440px;
  margin: auto;
  position: fixed;
  top: 7.8455rem;
  left: 0;
  right: 0; 
  bottom: 0;
  z-index: 2;
  cursor: default;
  background-color: #39374838;
  width: 100%;
  display: ${({ cartshow }) => (cartshow ? "block" : "none")};
`
export const Frame = styled.div`    
    display: ${({ cartshow }) => (cartshow ? "block" : "none")};    
    position: absolute;
    top: 4.6rem;  
    right: -1rem;
    z-index: 13;
    background-color: #fff;
    cursor: default;
    padding: 8px 16px;
`
export const Heading = styled.div`  
  font-weight: 700;
  line-height: 25.6px;
  margin-bottom: 2.5rem;
  & span{
    font-weight: normal;
  }
`
export const FrameBody = styled.div`
  overflow-y: scroll;
  scrollbar-width: none; 
  -ms-overflow-style: none;  
  &::-webkit-scrollbar { 
  width: 0;
  height: 0;
  }
  height: 31.5rem;  
`
export const Item = styled.div`
  display: flex;
  height: 13.7rem;   
  margin-bottom: 4.1rem;
  &:last-child{
    margin-bottom: 0    
  }
`

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
  margin-right: 1.8rem;
  min-width: 13.6rem;
`
export const Name = styled.p`
  line-height: 25.6px;
  margin-bottom: 1rem;
  &#brand{
    margin-top: -1rem;
    margin-bottom: .5rem;
  }
`
export const Price = styled.div`
  font-weight: bold;
  line-height: 25.6px;
  margin: 0 0 2.7rem;
`
export const Attributes = styled.div`  
  display: flex;
  flex-wrap: wrap;
`
export const Box = styled.div`
  cursor: pointer;
  line-height: 22.4px;
  font-size: 1.4rem;
  font-family: 'Source Sans Pro', sans-serif;
  border: ${({ selected }) => (selected ? '1px solid #A6A6A6' : '1px solid #1D1F22')};
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content:center;
  align-items: center; 
  margin-right:8px;
  background-color: ${({ selected }) => (selected && '#f7f5f0')}; 
  & span{
    color: ${({ selected }) => (selected && '#A6A6A6')};
  }
`

export const ColumnTwo = styled.div`
  display: flex;
  width: 13.9rem;
`
export const SignBox = styled.div``
export const AddSign = styled.div``
export const ValueSign = styled.div``
export const SubSign = styled.div``
export const Image = styled.img`
  width: 10.5rem;
  height: 13.7rem;
`

export const Total = styled.div``
export const TotalName = styled.span``
export const TotalValue = styled.span``

export const CheckOutBox = styled.div``
export const ViewBag = styled.span``
export const CheckOut = styled.div``
