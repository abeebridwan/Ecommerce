import React from 'react';
import { Container, Frame, Header, Item, Name, Price, Image } from './style/product';


export default class Product extends React.Component {

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