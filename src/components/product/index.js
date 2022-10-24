import React from 'react';
import { Container, Frame, Header, Item, Name, Price, Image, Cart, InStock, Filter } from './style/product';


export default class Product extends React.PureComponent {

  static ProductFilter({ children, ...restProps }) {
    return <Filter {...restProps}>{children}</Filter>
  }

  static ProductInStock({ children, ...restProps }) {
    return <InStock {...restProps}>{children}</InStock>
  }

  static ProductPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
  }

  static ProductName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
  }

  static ProductImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>
  }

  static ProductItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
  }

  static ProductCart({ children, ...restProps }) {
    return <Cart {...restProps}>{children}</Cart>
  }

  static ProductFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
  }

  static ProductHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
  }

  render() {
    const { children, ...restProps } = this.props;
    return <Container {...restProps}>{children}</Container>
  }
}