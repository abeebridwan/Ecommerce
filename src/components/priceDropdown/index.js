import React from "react";
import { Container, Item, Frame } from "./style/priceDropdown";

export default class PriceDropdown extends React.PureComponent {

  static PriceDropdownItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
  }

  static PriceDropdownFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
  }

  render() {
    const { children, ...restProps } = this.props;
    return <Container {...restProps}>{children}</Container>
  }
}