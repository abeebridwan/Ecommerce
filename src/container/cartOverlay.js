import React from "react";
import { Cart } from "../components";

export default class CartOverlayContainer extends React.PureComponent {

  componentDidMount() {
    const { cartshow } = this.props;
    if (cartshow) {
      document.body.style.overflow = "hidden";
    }
  }

  render() {
    const { cartshow, cartShowMethod } = this.props;
    return (
      <Cart>
        <Cart.CartFrame cartshow={cartshow}>
          Hello there
        </Cart.CartFrame>
        <Cart.CartHeaderOverlay cartshow={cartshow} onClick={() => {
          cartShowMethod(cartshow)
        }} />
        <Cart.CartOverlay cartshow={cartshow} onClick={() => {
          cartShowMethod(cartshow)
        }} />
      </Cart>

    )
  }
}