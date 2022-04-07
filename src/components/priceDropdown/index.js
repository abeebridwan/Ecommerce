import React from "react";
import { Container, Item } from "./style/priceDropdown";

export default class PriceDropdown extends React.PureComponent {

  static PriceDropdownItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
  }

  render() {
    const { children, ...restProps } = this.props;
    return <Container {...restProps}>{children}</Container>
  }
}