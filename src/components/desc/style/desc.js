import styled from "styled-components/macro";
import { Media } from '../../mixins'


export const Container = styled.div`
    font-size: 1.6rem;
    display: flex;
    ${Media('max-width', "800px", ['max-width: 90%'])}; 
    ${Media('max-width', "600px", ['max-width: 100%'])};
    
    ${Media('min-width', "400px", ['margin:5rem 2.5rem 0'])};  
    ${Media('min-width', "630px", ['margin:5rem 4.0rem 0'])};  
    ${Media('min-width', "750px", ['margin:5rem 5.0rem 0'])};   
    
    ${Media('max-width', "840px", ['flex-wrap: wrap;'])}; 
    margin: 5rem 2rem 0;    
    min-width: 350px;
    padding-bottom: 2rem; 
    & span#bigImageContainer{
        position: relative;
        display: flex;
        ${Media('min-width', "480px", ['width: 35rem; height: 37.1rem; '])};   
        ${Media('min-width', "530px", ['width: 37rem; height: 38.1rem; '])};   
        ${Media('min-width', "950px", ['width: 50rem; height: 57.1rem; '])};   
        ${Media('min-width', "1100px", ['width: 55rem; height: 57.1rem; '])};   
    }
`

export const ColumnOne = styled.div`
    display:flex; 
    margin-bottom : 3rem;
    ${Media('min-width', "800px", ['margin-right: 1.4rem'])};   
    ${Media('min-width', "1000px", ['margin-right: 3rem;'])};   
`

export const SmallImageBox = styled.div`
    display:flex;
    flex-direction: column;
    margin-right: 1.5rem;
    & span#smallImageContainer{
        position: relative;
        cursor: pointer
    }
    ${Media('min-width', "530px", ['margin-right: 3rem'])};   
    ${Media('min-width', "700px", ['margin-right: 10rem'])};   
    ${Media('min-width', "840px", ['margin-right: 1.2rem'])};  
    ${Media('min-width', "1000px", ['margin-right: 2.5rem'])};  
`

export const SmallImage = styled.img`
    width: 7.9rem;
    height: 8rem;
    margin-top: 2.5rem;
    cursor: pointer;
    &:first-child{
        margin-top: 0
    }
    -webkit-user-select: none;    
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;     
`
export const BigImage = styled.img`   
    max-width: 100%; 
    width: 34rem;
    height: 35.1rem;    
    display: flex;
    margin-bottom: 5rem;
    -webkit-user-select: none;    
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;   
    ${Media('min-width', "480px", ['width: 35rem; height: 37.1rem; '])};   
    ${Media('min-width', "530px", ['width: 37rem; height: 38.1rem; '])};   
    ${Media('min-width', "950px", ['width: 50rem; height: 57.1rem; '])};   
    ${Media('min-width', "1100px", ['width: 55rem; height: 57.1rem; '])};   
`


export const ColumnTwo = styled.div`
    padding-right: 1rem;  
    width: 90%;  
    ${Media('min-width', "800px", [' width: 60%;'])};   
    ${Media('min-width', "950px", [' width: 40%;'])};   
    ${Media('min-width', "1100px", [' width: 35%;'])};   
`

export const Name = styled.h2`
    line-height: 15px;    
    margin-bottom: 2rem;
    &#brand{
    margin-bottom: 4.5rem;
    font-weight: normal
    }
`

export const AttriBox = styled.div``

export const AttriText = styled.h2`
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 1.7rem;
    margin-bottom: .5rem
    `
export const Attributes = styled.div`
    display: flex;      
`
export const Box = styled.div`
    line-height: 22.4px;
    font-size: 1.6rem;
    font-family: 'Source Sans Pro', sans-serif;
    min-width: 3.2rem;
    height: 2.5rem;
    display: flex;
    justify-content:center; 
    align-items: center;  
    padding: .4rem .4rem; 
    margin-right: 1rem;    
    margin-bottom: 3rem;    
    border: 1px solid #1D1F22;
    opacity: .4;
    margin-top:.3rem;
    background-color: ${({ selected, text }) => (selected && text && "#1D1F22")}; 
    opacity: ${({ selected, text }) => (selected && text && 1)}; 
    color: ${({ selected, text }) => (selected && text && '#fff')}; 
    opacity: ${({ displayValue }) => (displayValue && .3)}; 
    opacity: ${({ selected, displayValue }) => (selected && displayValue && 1)}; 
    transform: ${({ selected, displayValue }) => (selected && displayValue && 'scale3d(1.2, 1.2, 1.2)')}; 
    background-color: ${({ displayValue }) => (displayValue && displayValue)}; 
    border: ${({ displayValue }) => (displayValue === "#FFFFFF" ? '1px solid #1D1F22' : displayValue)}; 
    ${Media('min-width', "500px", ['height: 2.9rem; min-width: 3.5rem;'])};
    ${Media('min-width', "530px", ['height: 3.2rem; min-width: 4.5rem;'])};
    -webkit-user-select: none;    
    -moz-user-select: none; 
    -ms-user-select: none;
    cursor: pointer;
`


export const PriceText = styled.h2`
    font-size: 1.7rem;
    margin-bottom: 2rem;
    font-family: 'Roboto Condensed', sans-serif;
`
export const Price = styled.div`
    font-weight: bold;
    font-size: 2rem;
    line-height: 18px;  
    margin-bottom: 3rem;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 1px;
`
export const AddToCart = styled.button`
    cursor: pointer;
    display: flex;
    justify-content:center;
    align-items: center; 
    font-size: bold;
    width: 100%;
    height: 4.5rem;
    color: #fff;    
    border: 1px solid #5ECE7B;
    background-color: #5ECE7B;
    margin-bottom: 4rem;
    -webkit-user-select: none;    
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
    &:hover{
    opacity: .5
    }
    ${Media('min-width', "800px", [' width: 80%;'])};   
`
export const InStock = styled.span`
  position: absolute;
  display: flex;
  top: 42%;
  left: 14.5%;
  font-size: 0.5em;
  line-height: 12.4px;
  color: #8D8F9A;
  -webkit-user-select: none;    
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
  &#bigOne{
  height: 100%;
  font-size: 1em;
  line-height: 20.4px;
  left: 22.5%;
  ${Media('min-width', "550px", ['font-size: 1.4em; line-height: 18.4px;'])};
  ${Media('min-width', "800px", ['top: 40%;'])}; 
  ${Media('min-width', "950px", ['left: 28.5%;'])}; 
  }  
 `