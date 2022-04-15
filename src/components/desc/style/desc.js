import styled from "styled-components/macro";
import { Media } from '../../mixins'


export const Container = styled.div`
    font-size: 1.6rem;
    display: flex;
    margin-top: 6rem;
    /* flex-wrap: wrap; */
    ${Media('min-width', "800px", ['max-width: 90vw'])};  
    ${Media('max-width', "800px", ['max-width: 95vw'])};
    ${Media('max-width', "600px", ['max-width: 100vw'])};

    ${Media('max-width', "399px", ['padding:0 1.5rem'])};
    ${Media('min-width', "400px", ['padding:0 4.5rem'])};  
    ${Media('min-width', "650px", ['padding:0 6.0rem'])};  
    ${Media('min-width', "750px", ['padding:0 8.8rem'])};     
`

export const ColumnOne = styled.div`
    display:flex; 
    margin-right: 1rem;
`

export const SmallImageBox = styled.div`
    display:flex;
    flex-direction: column;
    margin-right: 1rem;
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
    width: 61rem;
    height: 51.1rem;
    margin-bottom: 10rem;
    -webkit-user-select: none;    
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
`


export const ColumnTwo = styled.div`
    
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
    min-width: 3rem;
    height: 2rem;
    display: flex;
    justify-content:center; 
    align-items: center;  
    padding: 0 .4rem; 
    margin-right: 1rem;    
    margin-bottom: 3rem;    
    border: 1px solid #1D1F22;
    opacity: .4;
    margin-top:.3rem;
    background-color: ${({ selected, text }) => (selected && text && "#1D1F22")}; 
    opacity: ${({ selected, text }) => (selected && text && 1)}; 
    opacity: ${({ selected, displayValue }) => (selected && displayValue && 1)}; 
    opacity: ${({ displayValue }) => (displayValue && .4)}; 
    background-color: ${({ displayValue }) => (displayValue && displayValue)}; 
    border: ${({ displayValue }) => (displayValue === "#FFFFFF" ? '1px solid #1D1F22' : displayValue)}; 
    ${Media('min-width', "500px", ['height: 2.9rem; min-width: 3.5rem;'])};
    ${Media('min-width', "530px", ['height: 3.2rem; min-width: 4.5rem;'])};
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
`
