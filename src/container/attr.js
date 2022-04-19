import React from "react";
import { Attr } from "../components";

export default class Attributes extends React.PureComponent {


  render() {
    const { attrShow, attrMethod } = this.props
    return <Attr attrShow={attrShow}>Hello there</Attr>
  }
}