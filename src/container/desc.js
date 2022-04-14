import React from "react";
import { Desc } from "../components";
import { DataContext } from "../context/contextData";
export default class DescContainer extends React.PureComponent {
  static contextType = DataContext;
  render() {
    const { productId } = this.context;
    console.log({ productId })
    return <Desc> imported {productId} with context</Desc>
  }
}