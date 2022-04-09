import React from "react";
import {
  Image, AddSign, Attributes, Box, ColumnOne, ColumnTwo, Container,
  Frame, FrameBody, Heading, Item, Name, Overlay, Price, SignBox, SubSign, Total,
  TotalName, TotalValue, ValueSign, ViewBag, CheckOut, CheckOutBox, HeaderOverlay
} from "./style/cart";

export default class Cart extends React.PureComponent {

  static CartCheckOut({ children, ...restProps }) {
    return <CheckOut {...restProps}>{children}</CheckOut>
  }

  static CartViewBag({ children, ...restProps }) {
    return <ViewBag {...restProps}>{children}</ViewBag>
  }

  static CartCheckOutBox({ children, ...restProps }) {
    return <CheckOutBox {...restProps}>{children}</CheckOutBox>
  }

  static CartTotalValue({ children, ...restProps }) {
    return <TotalValue {...restProps}>{children}</TotalValue>
  }

  static CartTotalName({ children, ...restProps }) {
    return <TotalName {...restProps}>{children}</TotalName>
  }

  static CartTotal({ children, ...restProps }) {
    return <Total {...restProps}>{children}</Total>
  }

  static CartImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>
  }

  static CartSubSign({ children, ...restProps }) {
    return <SubSign {...restProps}>{children}</SubSign>
  }

  static CartValueSign({ children, ...restProps }) {
    return <ValueSign {...restProps}>{children}</ValueSign>
  }

  static CartAddSign({ children, ...restProps }) {
    return <AddSign {...restProps}>{children}</AddSign>
  }

  static CartSignBox({ children, ...restProps }) {
    return <SignBox {...restProps}>{children}</SignBox>
  }

  static CartColumnTwo({ children, ...restProps }) {
    return <ColumnTwo {...restProps}>{children}</ColumnTwo>
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

  static CartHeaderOverlay({ children, ...restProps }) {
    return <HeaderOverlay {...restProps}>{children}</HeaderOverlay>
  }

  static CartOverlay({ children, ...restProps }) {
    return <Overlay {...restProps}>{children}</Overlay>
  }

  render() {
    const { children, ...restProps } = this.props;
    return <Container {...restProps}>{children}</Container>
  }
}