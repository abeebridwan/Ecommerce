import React from "react";
import { ColumnOne, ColumnTwo, Container } from "./style/layout";


export default class Layout extends React.Component { 

  static LayoutColumnOne({ children, ...restProps }) {
    return <ColumnOne {...restProps}>{children}</ColumnOne>
  }

  static LayoutColumnTwo({ children, ...restProps }) {
    return <ColumnTwo {...restProps}>{children}</ColumnTwo>
  }

  render() {
    const { children, ...restProps } = this.props
    return <Container {...restProps}>{children}</Container>
  }

}