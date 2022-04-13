import React from "react";
import HeaderContainer from '../container/header';
import ProductsContainer from '../container/products';

export default class Plp extends React.Component {
  render() {
    return (
      <>
        <HeaderContainer />
        <ProductsContainer />
      </>
    )
  }

}