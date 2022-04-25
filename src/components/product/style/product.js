import styled from 'styled-components/macro';
import { Media } from '../../mixins'

export const Container = styled.div`
  font-size: 1.5rem;
  ${Media('min-width', "400px", ['margin:0 2.5rem'])};  
  ${Media('min-width', "630px", ['margin:0 4.0rem'])};
  ${Media('min-width', "750px", ['margin:0 5.0rem'])};  
  margin: 0 2rem;
  & a{
    all: unset
  }
`;

export const Header = styled.h2` 
  font-weight: 700;
  line-height: 19.2px !important; 
  text-transform: uppercase;
  font-size: 2rem;
  margin: 5rem 0 3rem;
  ${Media('min-width', "530px", ['margin: 5rem 0; font-size: 2.3rem;'])}; 
  -webkit-user-select: none;    
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;


export const Frame = styled.div`
  display: grid;    
  grid-template-columns: repeat(auto-fill, minmax(max(100%, 5rem), 1fr));  
  ${Media('min-width', "450px", ['grid-template-columns: repeat(auto-fill, minmax(max(50%, 7rem), 1fr));'])};
  ${Media('min-width', "830px", ['grid-template-columns: repeat(auto-fill, minmax(max(33%, 10rem), 1fr));'])}; 
 `;


export const Item = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;   
  margin-right: 4rem;
  margin-bottom: 6rem; 

  &:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);      
      & span.cartBox{
        display: flex;
      }
  }
  & span.item{
    position: relative;   
    display: flex;   
    }   
  }
   ${Media('min-width', "830px", ['margin-right: 2rem;'])}; 
  ${Media('min-width', "910px", ['margin-right: 4rem;'])}; 
 
`;

export const Cart = styled.span`
  position: absolute;
  bottom: -8%;
  left: 79%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #5ECE7B;
  padding: 1rem;
  border-radius: 50%;
  margin: .5rem;
  width: 3em;
  height: 3em;
  cursor: pointer;
  & svg#cart{
    path{
      fill: #fff;
    }
  }
  ${Media('min-width', "450px", ['width: 2em; height: 2em;  padding: .7rem; bottom: -9%;'])};
  ${Media('min-width', "660px", ['width: 3em; height: 3em;  padding: 1rem; bottom: -6%;'])};  
  opacity: ${({ inStock }) => (!inStock && 0.6)}; 
`

export const Image = styled.img`
  width: 30rem;
  height: 28rem;
  max-width: 100%;   
  ${Media('min-width', "450px", ['width: 21rem; height: 28rem;'])};
  ${Media('min-width', "550px", ['width: 25rem; height: 28rem;'])}; 

  ${Media('min-width', "660px", ['width: 35rem; height: 29rem;'])}; 
  ${Media('min-width', "920px", ['width: 35.5rem; height: 32rem;'])};
  ${Media('min-width', "1300px", ['width: 35.5rem; height: 36rem;'])};
  ${Media('min-width', "1200px", ['width: 37.5rem; height: 41rem;'])};    
  opacity: ${({ inStock }) => (!inStock && 0.6)}; 

`;

export const Name = styled.p`
  margin-top: 2rem;
  align-self: flex-start;
  font-size: 1.8rem;  
  opacity: ${({ inStock }) => (!inStock && 0.6)}; 
`;

export const Price = styled.p`
  margin-top: 1rem;
  align-self: flex-start;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 28.8px;
  opacity: ${({ inStock }) => (!inStock && 0.6)}; 
`;
export const InStock = styled.div`
  display: block;
  position: absolute;
  top: 46%;
  left: 24.5%;
  font-size: 1.4em;
  line-height: 12.4px;
  color: #8D8F9A;
  -webkit-user-select: none;    
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
  cursor: default;
  ${Media('min-width', "450px", ['font-size: .8em; left: 20%;'])};
  ${Media('min-width', "660px", ['font-size: 1.2em; left: 21%;'])};
  ${Media('min-width', "870px", ['font-size: 1.3em; left: 22.5%;'])};
  opacity: ${({ inStock }) => (!inStock && 0.6)}; 

 `