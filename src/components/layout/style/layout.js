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
  display: flex;
  justify-content: flex-start;
  align-content: center;    
   
`;

export const ColumnTwo = styled.span`
  border: 2px solid cyan;
  background-color: cyan;
  display: inline-block; 
  border: 1px solid yellow; 
  height: 100%; 
`;

export const Category = styled.span` 
  display: inline-block;
  padding: 1.2rem 0.6rem 0.9rem;  
  border-bottom: 1px solid;
  color: #5ECE7B;
margin: 3px;
  height: 100%; 
`

export const CategoryText = styled.span`
  font-size: .8rem;
  font-weight: 550;
  line-height: 10px;
  text-align: center;
`