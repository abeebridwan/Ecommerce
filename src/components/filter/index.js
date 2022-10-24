import React from "react";
import { Container } from "./styles/filter"; 

export default class Filter extends React.PureComponent {

  static FilterContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
  }

  render() {
    const { children, ...restProps } = this.props
    return <Container {...restProps}>{children}</Container>
  }

}