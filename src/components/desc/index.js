import React from "react";
import {
  AddToCart, AttriBox, Attributes, AttriText, BigImage, ColumnOne, ColumnTwo, Container,
  Name, Price, PriceText, SmallImages
} from "./style/desc";


export default class Desc extends React.PureComponent {
  static DescDesc({ children, ...restProps }) {
    return <Desc {...restProps}>{children}</Desc>
  }

  static DescAddToCart({ children, ...restProps }) {
    return <AddToCart {...restProps}>{children}</AddToCart>
  }

  static DescPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
  }

  static DescPriceText({ children, ...restProps }) {
    return <PriceText {...restProps}>{children}</PriceText>
  }

  static DescAttributes({ children, ...restProps }) {
    return <Attributes {...restProps}>{children}</Attributes>
  }

  static DescAttriText({ children, ...restProps }) {
    return <AttriText {...restProps}>{children}</AttriText>
  }

  static DescAttriBox({ children, ...restProps }) {
    return <AttriBox {...restProps}>{children}</AttriBox>
  }

  static DescName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
  }

  static DescColumnTwo({ children, ...restProps }) {
    return <ColumnTwo {...restProps}>{children}</ColumnTwo>
  }

  static DescBigImage({ children, ...restProps }) {
    return <BigImage {...restProps}>{children}</BigImage>
  }

  static DescSmallImages({ children, ...restProps }) {
    return <SmallImages {...restProps}>{children}</SmallImages>
  }

  static DescColumnOne({ children, ...restProps }) {
    return <ColumnOne {...restProps}>{children}</ColumnOne>
  }

  render() {
    const { children, ...restProps } = this.props
    return <Container {...restProps}>{children}</Container>
  }
}