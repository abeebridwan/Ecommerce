import styled from 'styled-components/macro'


export const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 2rem 4rem 2rem 2rem;
  position: absolute;
  top: 3rem;
  left: -2rem;
  font-weight: 500;
  line-height: 28.8px;
  font-size: 1.8rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
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