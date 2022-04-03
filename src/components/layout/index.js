import React from "react";
import { Category, CategoryText, ColumnOne, ColumnTwo, Container } from "./style/layout";


export default class Layout extends React.Component {


  static LayoutCategoryText({ children, ...restProps }) {
    return <CategoryText {...restProps}>{children}</CategoryText>
  }

  static LayoutCategory({ children, ...restProps }) {
    return <Category {...restProps}>{children}</Category>
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