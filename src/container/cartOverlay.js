import React from "react";
import { Cart } from "../components";

export default class CartOverlayContainer extends React.PureComponent {

  render() {
    const { cartshow } = this.props;
    return (
      <Cart>
        <Cart.CartFrame cartshow={cartshow}>

        </Cart.CartFrame>
        <Cart.CartOverlay cartshow={cartshow} />
      </Cart>

    )
  }
}