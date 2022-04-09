import styled from 'styled-components/macro';
import { Media } from '../../mixins'


export const Frame = styled.div`
  display: ${({ priceshow }) => (priceshow ? "block" : "none")};
  width: 100%;
  height: 100%;
  max-width: 1440px;
  background-color: transparent;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
  cursor: default;
`

export const Container = styled.ul`
  display: ${({ priceshow }) => (priceshow ? "block" : "none")};
  list-style-type: none;
  margin: 0;
  padding: 1rem 1.5rem 2rem 1rem;
  cursor: default;
  position: absolute;
  z-index: 11;
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
  cursor: pointer;
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