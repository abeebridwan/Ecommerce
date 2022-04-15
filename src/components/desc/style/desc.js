import styled from "styled-components/macro";
import { Media } from '../../mixins'


export const Container = styled.div`
    font-size: 1.6rem;
    display: flex;
    margin-top: 6rem;
    ${Media('max-width', "399px", ['padding:0 1.5rem'])};
    ${Media('min-width', "400px", ['padding:0 4.5rem'])};  
    ${Media('min-width', "650px", ['padding:0 6.0rem'])};  
    ${Media('min-width', "750px", ['padding:0 8.8rem'])};    
`

export const ColumnOne = styled.div`
    display:flex; 

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
`
export const BigImage = styled.img`
    width: 61rem;
    height: 51.1rem;
    margin-bottom: 50rem;
`


export const ColumnTwo = styled.div``

export const Name = styled.div``

export const AttriBox = styled.div``

export const AttriText = styled.div``
export const Attributes = styled.div``
export const Box = styled.div``


export const PriceText = styled.h2``
export const Price = styled.div``
export const AddToCart = styled.button``
