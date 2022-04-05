
import styled from 'styled-components/macro';
import { Media } from '../../mixins'


export const Container = styled.div` 
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 1.6rem;
 padding:0 1rem;
 ${Media('min-width', "650px", ['padding:0 10.1rem 0 10.1rem'])};  
 color: #1D1F22;
 height: 8rem;
 border: 1px solid;
`;

export const ColumnOne = styled.span`    
  border: 1px solid green;  
`;


export const ColumnTwo = styled.span`   
  border: 1px solid blue;
`;

export const ColumnThree = styled.span`   
  border: 1px solid red;
`;

export const Category = styled.span`   
  /* padding: 2.3rem 1.5rem .93rem;  
  border-bottom: ${({ colorChange }) => (colorChange && '2px solid #5ECE7B')};
  color: ${({ colorChange }) => (colorChange && '#5ECE7B')};   */
  
  color:  #5ECE7B; 
  position: relative;    

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
  
}  
`

export const DropdownMenu = styled.span`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 30px;  
  min-width: 120px;
  z-index: 999999;
  border-radius: 2px;
  background: #eee;
  box-shadow: 0 8px 8px -4px; 
  padding: 12px 16px;
  transition: all 0.5s;

  & span.dropItem{
    padding: 5px 0px;

    &:hover{
      background: #5ECE7B;
    }
  }
`

export const DesktopCategory = styled(Category)`
  display: none;
`

export const CategoryText = styled.span` 
  font-weight: 600;
  line-height: 19.2px;
  text-transform: uppercase;
`
export const PriceFrame = styled.span`  
  display: inline-flex;
  border: 1px solid yellow;
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
`

export const CartNumber = styled.span``
