import React from "react"
import {
  Overlay, Container, Frame, ContainerBox, Text, AttriContainer, Box,
  Cancel, AddToCart
} from "./style/attri";

export default class Attri extends React.PureComponent {

  static AttriAddToCart({ children, ...restProps }) {
    return <AddToCart {...restProps}>{children}</AddToCart>
  }

  static AttriCancel({ children, ...restProps }) {
    return <Cancel {...restProps}>{children}</Cancel>
  }

  static AttriBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
  }

  static AttriContainer({ children, ...restProps }) {
    return <AttriContainer {...restProps}>{children}</AttriContainer>
  }

  static AttriText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
  }

  static AttriContainerBox({ children, ...restProps }) {
    return <ContainerBox {...restProps}>{children}</ContainerBox>
  }


  static AttriFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
  }


  static AttriOverlay({ children, ...restProps }) {
    return <Overlay {...restProps}>{children}</Overlay>
  }

  render() {
    const { children, ...restProps } = this.props;
    return <Container {...restProps}>{children}</Container>
  }
}