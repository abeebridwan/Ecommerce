import styled from 'styled-components/macro';

export const Container = styled.div`
  font-size: 1.5rem;
  /* position: relative; */

  & a{
    all: unset
  }
`;

export const Header = styled.h2` 
  font-weight: 400;
  line-height: 19.2px !important; 
  text-transform: uppercase;
  font-size: 2rem;
`;

export const Frame = styled.div``;

export const Item = styled.div`

`;

export const Cart = styled.span`
  /* position: absolute;  */
  display: flex;
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
  width: 10rem;
  height: 5rem;
`;

export const Name = styled.p``;

export const Price = styled.p``;
