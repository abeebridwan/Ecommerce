import React from "react";
import HeaderContainer from '../container/header';
import ProductsContainer from '../container/products';
import { DataContext } from "../context/contextData";

export default class Plp extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      changeCategoryTo: sessionStorage.getItem("name") || "all",
      currencyIndex: localStorage.getItem("index") || 0,
      cartIdValues: {},
      error: null
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.addToCart = this.addToCart.bind(this)
  }

  changeCurrency(currencyIndex) {
    this.setState({ currencyIndex })
  }

  changeCategory(changeCategoryTo) {
    this.setState({ changeCategoryTo })
  }

  addToCart(idValue) {
    const { cartIdValues } = this.state;    
    !cartIdValues[idValue] ? cartIdValues[idValue] = 1 : cartIdValues[idValue] += 1
    this.setState({ cartIdValues })
  }

  render() {
    const { currencyIndex, changeCategoryTo, cartIdValues } = this.state;
    return (
      <DataContext.Provider value={{
        changeCurrency: this.changeCurrency,
        addToCart: this.addToCart,
        cartIdValues: cartIdValues
      }}>
        <HeaderContainer changeCategory={this.changeCategory} cartIdValues={cartIdValues} currencyIndex={currencyIndex} />
        <ProductsContainer changeCategoryTo={changeCategoryTo} currencyIndex={currencyIndex} />
      </DataContext.Provider>
    )
  }

}