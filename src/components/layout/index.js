import React from "react";
import { Arrow, Cart, CartFrame, Category, CategoryText, ColumnOne, ColumnThree, ColumnTwo, Container, Logo, Price, PriceFrame } from "./style/layout";


export default class Layout extends React.Component {

  static LayoutCart({ children, ...restProps }) {
    return <Cart {...restProps}>{children}</Cart>
  }

  static LayoutPriceFrame({ children, ...restProps }) {
    return <PriceFrame {...restProps}>{children}</PriceFrame>
  }

  static LayoutArrow({ children, ...restProps }) {
    return <Arrow {...restProps}>{children}</Arrow>
  }

  static LayoutPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
  }

  static LayoutCartFrame({ children, ...restProps }) {
    return <CartFrame {...restProps}>{children}</CartFrame>
  }

  static LayoutLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>
  }

  static LayoutCategoryText({ children, ...restProps }) {
    return <CategoryText {...restProps}>{children}</CategoryText>
  }

  static LayoutCategory({ children, ...restProps }) {
    return <Category {...restProps}>{children}</Category>
  }

  static LayoutColumnThree({ children, ...restProps }) {
    return <ColumnThree {...restProps}>{children}</ColumnThree>
  }

  static LayoutColumnTwo({ children, ...restProps }) {
    return <ColumnTwo {...restProps}>{children}</ColumnTwo>
  }

  static LayoutColumnOne({ children, ...restProps }) {
    return <ColumnOne {...restProps}>{children}</ColumnOne>
  }

  render() {
    const { children, ...restProps } = this.props
    return <Container {...restProps}>{children}</Container>
  }

}