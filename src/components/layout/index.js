import React from "react";
import { CartFrame, CartNumber, MobileCategory, CategoryText, ColumnOne, ColumnThree, ColumnTwo, Container, DesktopCategory, DropdownMenu, Price, PriceFrame } from "./style/layout";


export default class Layout extends React.PureComponent {

  static LayoutCartNumber({ children, ...restProps }) {
    return <CartNumber {...restProps}>{children}</CartNumber>
  }

  static LayoutCartFrame({ children, ...restProps }) {
    return <CartFrame {...restProps}>{children}</CartFrame>
  }

  static LayoutPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
  }

  static LayoutPriceFrame({ children, ...restProps }) {
    return <PriceFrame {...restProps}>{children}</PriceFrame>
  }

  static LayoutCategoryText({ children, ...restProps }) {
    return <CategoryText {...restProps}>{children}</CategoryText>
  }

  static LayoutDesktopCategory({ children, ...restProps }) {
    return <DesktopCategory {...restProps}>{children}</DesktopCategory>
  }

  static LayoutMobileCategory({ children, ...restProps }) {
    return <MobileCategory {...restProps}>{children}</MobileCategory>
  }

  static LayoutColumnThree({ children, ...restProps }) {
    return <ColumnThree {...restProps}>{children}</ColumnThree>
  }

  static LayoutColumnTwo({ children, ...restProps }) {
    return <ColumnTwo {...restProps}>{children}</ColumnTwo>
  }

  static LayoutDropdownMenu({ children, ...restProps }) {
    return <DropdownMenu {...restProps}>{children}</DropdownMenu>
  }

  static LayoutColumnOne({ children, ...restProps }) {
    return <ColumnOne {...restProps}>{children}</ColumnOne>
  }

  render() {
    const { children, ...restProps } = this.props
    return <Container {...restProps}>{children}</Container>
  }

}