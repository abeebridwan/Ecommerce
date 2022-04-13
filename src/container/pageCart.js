import React from "react";
import { PageCart } from "../components";

export default class CartContainer extends React.PureComponent {
  constructor(props){
    super(props)
    this.state= {
      
    }
  }

  render() {
    return (
      <PageCart>
        <PageCart.CartPageHeader>CART</PageCart.CartPageHeader>
        <PageCart.CartPageFrame>
          Yello


        </PageCart.CartPageFrame>
      </PageCart>
    )
  }
}