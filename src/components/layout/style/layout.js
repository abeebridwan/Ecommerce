import styled from 'styled-components/macro';

export const Container = styled.div`
 border: 2px solid;
 padding: 10px;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const ColumnOne = styled.span`
border: 2px solid blue;
background-color: blue;
height : 10px;
display: inline-block;
width: 50%;
`;

export const ColumnTwo = styled.span`
border: 2px solid cyan;
background-color: cyan;
height : 10px;
display: inline-block;
width: 50%;
`;