import React from "react";
import { Container, Sidebar, Cancel, Frame, TopBar, Content, Item } from "./styles/filter"; 

export default class Filter extends React.PureComponent {

  static FilterItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
  }

  static FilterContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
  }

  static FilterTopBar({ children, ...restProps }) {
    return <TopBar {...restProps}>{children}</TopBar>
  }

  static FilterFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
  }
  
  static FilterCancel({ children, ...restProps }) {
    return <Cancel {...restProps}>{children}</Cancel>
  }

  static FilterSidebar({ children, ...restProps }) {
    return <Sidebar {...restProps}>{children}</Sidebar>
  }

  static FilterContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
  }

  render() {
    const { children, ...restProps } = this.props
    return <Container {...restProps}>{children}</Container>
  }

}