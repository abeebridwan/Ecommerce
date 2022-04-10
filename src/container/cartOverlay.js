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
                <Cart.CartName id="brand">
                  Running Short
                </Cart.CartName>
                <Cart.CartPrice>
                  {"$50.00"}
                </Cart.CartPrice>
                <Cart.CartAttributes>
                  <Cart.CartBox><span>S</span></Cart.CartBox>
                  <Cart.CartBox selected><span>M</span></Cart.CartBox>
                </Cart.CartAttributes>
              </Cart.CartColumnOne>

              <Cart.CartColumnTwo>
                <Cart.CartSignBox>
                  <Cart.CartAddSign><span>&#43;</span></Cart.CartAddSign>
                  <Cart.CartValueSign>{1}</Cart.CartValueSign>
                  <Cart.CartSubSign><span>&#8722;</span></Cart.CartSubSign>
                </Cart.CartSignBox>
                <Cart.CartImage src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg" alt="cart Image" />
              </Cart.CartColumnTwo>
            </Cart.CartItem>
          </Cart.CartFrameBody>

          <Cart.CartTotal>
            <Cart.CartTotalName>Total</Cart.CartTotalName>
            <Cart.CartTotalValue>{"$100.00"}</Cart.CartTotalValue>
          </Cart.CartTotal>

          <Cart.CartCheckOutBox>
            <Cart.CartViewBag><span>VIEW BAG</span></Cart.CartViewBag>
            <Cart.CartCheckOut><span> CHECK OUT</span></Cart.CartCheckOut>
          </Cart.CartCheckOutBox>
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