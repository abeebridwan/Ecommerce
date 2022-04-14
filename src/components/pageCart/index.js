import React from "react";
import {
  AddSign, Attributes, Box,
  CheckOut, CheckOutBox, ColumnOne, ColumnTwo, Container, Frame, Header, Image, Item, Name,
  Price, SignBox, SubSign, ToggleLink, Total, TotalName, TotalValue, ValueSign
} from "./style/pageCart";


export default class PageCart extends React.PureComponent {

  static CartPageToggleLink({ children, ...restProps }) {
    return <ToggleLink {...restProps}>{children}</ToggleLink>
  }

  static CartPageCheckOut({ children, ...restProps }) {
    return <CheckOut {...restProps}>{children}</CheckOut>
  }

  static CartPageCheckOutBox({ children, ...restProps }) {
    return <CheckOutBox {...restProps}>{children}</CheckOutBox>
  }

  static CartPageTotalValue({ children, ...restProps }) {
    return <TotalValue {...restProps}>{children}</TotalValue>
  }

  static CartPageTotalName({ children, ...restProps }) {
    return <TotalName {...restProps}>{children}</TotalName>
  }

  static CartPageTotal({ children, ...restProps }) {
    return <Total {...restProps}>{children}</Total>
  }

  static CartPageImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>
  }

  static CartPageSubSign({ children, ...restProps }) {
    return <SubSign {...restProps}>{children}</SubSign>
  }

  static CartPageValueSign({ children, ...restProps }) {
    return <ValueSign {...restProps}>{children}</ValueSign>
  }

  static CartPageAddSign({ children, ...restProps }) {
    return <AddSign {...restProps}>{children}</AddSign>
  }

  static CartPageSignBox({ children, ...restProps }) {
    return <SignBox {...restProps}>{children}</SignBox>
  }

  static CartPageColumnTwo({ children, ...restProps }) {
    return <ColumnTwo {...restProps}>{children}</ColumnTwo>
  }

  static CartPageBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
  }

  static CartPageAttributes({ children, ...restProps }) {
    return <Attributes {...restProps}>{children}</Attributes>
  }

  static CartPagePrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
  }

  static CartPageName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
  }

  static CartPageColumnOne({ children, ...restProps }) {
    return <ColumnOne {...restProps}>{children}</ColumnOne>
  }

  static CartPageItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
  }

  static CartPageFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
  }

  static CartPageHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
  }

  render() {
    const { children, ...restProps } = this.props;
    return <Container {...restProps}>{children}</Container>
  }
}