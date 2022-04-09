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
          <Cart.CartHeading>
            My Bag, <span>{0} items</span>
          </Cart.CartHeading>

          <Cart.CartFrameBody>
            <Cart.CartItem>
              <Cart.CartColumnOne>
                <Cart.CartName>
                  Apollo
                </Cart.CartName>
                <Cart.CartName>
                  Running Short
                </Cart.CartName>
                <Cart.CartPrice>
                  {"$50.00"}
                </Cart.CartPrice>
                <Cart.CartAttributes>
                  <Cart.CartBox>S</Cart.CartBox>
                  <Cart.CartBox>M</Cart.CartBox>
                </Cart.CartAttributes>
              </Cart.CartColumnOne>

              <Cart.CartColumnTwo>
                <Cart.CartSignBox>
                  <Cart.CartAddSign>+</Cart.CartAddSign>
                  <Cart.CartValueSign>{0}</Cart.CartValueSign>
                  <Cart.CartSubSign>-</Cart.CartSubSign>
                </Cart.CartSignBox>
                <Cart.CartImage src="" alt="cart Image" />
              </Cart.CartColumnTwo>
            </Cart.CartItem>
          </Cart.CartFrameBody>

          <Cart.CartTotal>
            <Cart.CartTotalName>Total</Cart.CartTotalName>
            <Cart.CartTotalValue>{0}</Cart.CartTotalValue>
          </Cart.CartTotal>

          <Cart.CartCheckOut>
            <Cart.CartViewBag>VIEW BAG</Cart.CartViewBag>
            <Cart.CartCheckOut>CHECK OUT</Cart.CartCheckOut>
          </Cart.CartCheckOut>
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