import styled from 'styled-components/macro';
import { Media } from '../../mixins'

export const Container = styled.div`
  font-size: 1.5rem;
  /* position: relative; */  
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
  margin: 3rem 0;
  ${Media('min-width', "530px", ['margin: 5rem 0; font-size: 2.3rem;'])}; 
`;

export const Frame = styled.div`
  display: grid;    
  grid-template-columns: repeat(auto-fill, minmax(max(100%, 5rem), 1fr));
  
  ${Media('min-width', "450px", ['grid-template-columns: repeat(auto-fill, minmax(max(50%, 7rem), 1fr));'])};
  ${Media('min-width', "830px", ['grid-template-columns: repeat(auto-fill, minmax(max(33%, 10rem), 1fr));'])};
 

`;

export const Item = styled.div`
  margin-right: 4rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;   
  &:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
  }
`;

export const Cart = styled.span`
  /* position: absolute;  */
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #5ECE7B;
  padding: 1rem;
  border-radius: 50%;
  margin: .5rem;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  & svg#cart{
    path{
      fill: #fff;
    }
  }
`

export const Image = styled.img`
  width: 30rem;
  height: 28rem;
  max-width: 100%;   
  ${Media('min-width', "450px", ['width: 21rem; height: 17rem;'])};
  ${Media('min-width', "550px", ['width: 25rem; height: 20rem;'])}; 

  ${Media('min-width', "660px", ['width: 35rem; height: 27rem;'])}; 
  ${Media('min-width', "920px", ['width: 35.5rem; height: 31rem;'])};
  ${Media('min-width', "1300px", ['width: 35.5rem; height: 35rem;'])};

  ${Media('min-width', "1200px", ['width: 37.5rem; height: 35rem;'])};   
 
`;

export const Name = styled.p`
  margin-top: 2.4rem;
  align-self: flex-start;
  
`;

export const Price = styled.p`
  margin-top: 1rem;
  align-self: flex-start;

`;
