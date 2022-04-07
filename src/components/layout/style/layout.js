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
 position: relative;
 ${Media('min-width', "500px", ['padding:0 4.5rem'])};  
 ${Media('min-width', "650px", ['padding:0 6.0rem'])};  
 ${Media('min-width', "750px", ['padding:0 8.8rem'])};  
`;

export const ColumnOne = styled.span`    
  display: flex;    
`;

export const ColumnTwo = styled.span`
  cursor: pointer;
`;
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
  height: 8rem;
  align-items: center;
  padding: 0 1.6rem;  
  cursor: pointer;
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
`

export const Price = styled.span`
  display: flex;
  align-items: center;
 
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
`

export const CartNumber = styled.span``
