import React from "react";
import { Cart } from "../components";

export default class CartOverlayContainer extends React.PureComponent {

  render() {
    return (
      <Cart>
        <Cart.CartFrame>

        </Cart.CartFrame>
        <Cart.CartOverlay />
      </Cart>

    )
  }
}