
import React from "react";
import CartContainer from "../container/pageCart"
import HeaderContainer from "../container/header";

export default class Cart extends React.PureComponent {

  render() {
    return (
      <>
        <HeaderContainer />
        <CartContainer />
      </>
    )
  }
}