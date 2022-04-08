import React from "react";
import { Attributes, Box, ColumnOne, Container, Frame, FrameBody, Heading, Item, Name, Overlay, Price } from "./style/cart";

export default class Cart extends React.PureComponent {



  static CartColumnOne({ children, ...restProps }) {
    return <ColumnOne {...restProps}>{children}</ColumnOne>
  }
  
  static CartBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
  }

  static CartAttributes({ children, ...restProps }) {
    return <Attributes {...restProps}>{children}</Attributes>
  }

  static CartPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
  }

  static CartName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
  }

  static CartColumnOne({ children, ...restProps }) {
    return <ColumnOne {...restProps}>{children}</ColumnOne>
  }

  static CartItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
  }

  static CartFrameBody({ children, ...restProps }) {
    return <FrameBody {...restProps}>{children}</FrameBody>
  }

  static CartHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>
  }

  static CartFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
  }

  static CartOverlay({ children, ...restProps }) {
    return <Overlay {...restProps}>{children}</Overlay>
  }

  render() {
    const { children, ...restProps } = this.props;
    return <Container {...restProps}>{children}</Container>
  }
}