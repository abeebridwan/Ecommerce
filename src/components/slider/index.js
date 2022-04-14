import React from "react";
import { ImageContainer, Image, ToggleLink } from "./style/slider";

export default class Slider extends React.PureComponent {
  
  static SliderToggleLink({ children, ...restProps }) {
  return <ToggleLink {...restProps}>{children}</ToggleLink>
}

  static SliderImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>
}

render() {
  const { children, ...restProps } = this.props;
  return <ImageContainer {...restProps}>{children}</ImageContainer>
}
}