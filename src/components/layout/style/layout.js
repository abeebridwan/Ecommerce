import styled from 'styled-components/macro';

export const Container = styled.div` 
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 2.5rem;
 padding:0 1.1rem;
`;

export const ColumnOne = styled.span`   
  display: inline-block;  
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: center;  
`;

export const ColumnTwo = styled.span`
  border: 2px solid cyan;
  background-color: cyan;
  display: inline-block; 
  height: 100%
`;

export const Category = styled.span`
  color: #5ECE7B; 
  display: inline-block;
  padding: 0 0.5rem;  
  border-bottom: 3px solid,
  color: #5ECE7B
`

export const CategoryText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 19.2px;
  text-align: center;
`