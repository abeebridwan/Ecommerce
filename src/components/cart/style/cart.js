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
  overflow-y: auto;
  height: 31.5rem;  
`
export const Item = styled.div`
  display: flex;
  height: 13.7rem;  
  overflow: hidden;
  margin-bottom: 4.1rem;
  &:last-child{
    margin-bottom: 0    
  }

`

export const ColumnOne = styled.div`
  margin-right: 1.8rem;
  width: 13.6rem;
`
export const Name = styled.p`
  line-height: 25.6px;
  margin-bottom: .25rem;
`
export const Price = styled.div`

`
export const Attributes = styled.div``
export const Box = styled.div``

export const ColumnTwo = styled.div`
  width: 13.9rem;
`
export const SignBox = styled.div``
export const AddSign = styled.div``
export const ValueSign = styled.div``
export const SubSign = styled.div``
export const Image = styled.img`
  width: 10.5rem
`

export const Total = styled.div``
export const TotalName = styled.span``
export const TotalValue = styled.span``

export const CheckOutBox = styled.div``
export const ViewBag = styled.span``
export const CheckOut = styled.div``
