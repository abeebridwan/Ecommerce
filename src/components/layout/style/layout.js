import styled from 'styled-components/macro';
import { Media } from '../../mixins'


export const Container = styled.div` 
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 1.6rem;
 padding:0 1.5rem;
 color: #1D1F22;
 height: 8rem;
 ${Media('min-width', "400px", ['padding:0 4.5rem'])};  
 ${Media('min-width', "650px", ['padding:0 6.0rem'])};  
 ${Media('min-width', "750px", ['padding:0 8.8rem'])};  
`;

export const ColumnOne = styled.span`    
  display: flex;    
  & a{
    all: unset
  }   
`;

export const ColumnTwo = styled.span``;
export const ColumnThree = styled.span``;

export const MobileCategory = styled.span`  
  color:  #5ECE7B; 
  position: relative;
  cursor: pointer;   
  & #categoryArrow{   
    width: 2.5rem;
    height: .8rem;
    & path{
      stroke: #5ECE7B
    }
  }  
  &:hover .dropDownMenu {  
    display: flex;
  }
  & span{
    font-weight: 600 !important;
  }
  ${Media('min-width', "650px", ['display: none'])};  
}  
`

export const DropdownMenu = styled.span`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 30px;  
  min-width: 120px;
  z-index: 1;
  border-radius: 2px;
  background: #eee;
  box-shadow: 0 8px 8px -4px; 
  padding: 12px 16px;
  border-radius: 3px;
  
  & span.dropItem{
    padding: 5px 0px;
    &:hover{
      color: #fff;
      background: #5ECE7B;
    }
  }
`

export const DesktopCategory = styled.span`
  display: none;
  position: relative;
  height: 8rem;
  align-items: center;
  padding: 0 1.6rem;  
  cursor: pointer;
  z-index: 17;
  border-bottom: ${({ active }) => (active && '2px solid #5ECE7B')};
  color: ${({ active }) => (active && '#5ECE7B')};  
  & span{
    font-weight: ${({ active }) => (active && '600 !important;')};  
  }
  ${Media('min-width', "650px", ['display: flex'])};  
`

export const CategoryText = styled.span` 
  font-weight: 400;
  line-height: 19.2px !important; 
  text-transform: uppercase;
`
export const PriceFrame = styled.span`  
  display: inline-flex;
  cursor: pointer; 
  position: relative  
`

export const Price = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;   
 
  & svg#priceArrow{
    align-self: flex-end;
    margin-bottom: .5rem;
    margin-left: 1rem;   
    width: 6px;
    height: 3px;     
  } 
  `

export const CartFrame = styled.span`
    margin-left: 2.2rem;
    cursor: pointer;
    position: relative;
    z-index: 9;
  `
export const Cart = styled.span``

export const CartNumber = styled.span`
  position : absolute;
  top: -14px;
  right: -12px;
  background-color: #1D1F22;
  color: #fff;
  border-radius: 50%;
  padding: .2rem .3rem .15rem .2rem;
  min-width: 2.1rem;
  min-height: 2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  line-height: 10.41px;
  font-size: 1.4rem
`
