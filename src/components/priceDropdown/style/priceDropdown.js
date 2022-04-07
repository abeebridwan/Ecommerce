import styled from 'styled-components/macro';
import { Media } from '../../mixins'


export const Container = styled.ul`
  display: ${({ priceshow }) => (priceshow ? "block" : "none")};
  list-style-type: none;
  margin: 0;
  padding: 1rem 1.5rem 2rem 1rem;
  position: absolute;
  z-index: 2;
  top: 3rem;
  left: -2rem;
  font-weight: 500;
  line-height: 28.8px;
  font-size: 1.8rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
  ${Media('min-width', "500px", ['padding: 2rem 4rem 2rem 2rem'])};  

`
export const Item = styled.li`
  margin: 2.1rem 0;
  &:first-child{
    margin-top: 0
  }  
  &:last-child{
    margin-bottom: 0
  }
  &:hover{
    background-color: #1D1F22;
    color: #fff;
  }
`