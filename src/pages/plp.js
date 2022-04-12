import React from "react";
import HeaderContainer from '../container/header';
import ProductsContainer from '../container/products';
import { DataContext } from "../context/contextData";

export default class Plp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      changeCategoryTo: sessionStorage.getItem("name") || "all",
      currencyIndex: localStorage.getItem("index") || 0,
      cartIdValues: JSON.parse(localStorage.getItem("cartIdValues")) || {}      
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.addRemoveFromCart = this.addRemoveFromCart.bind(this)
  }

  changeCurrency(currencyIndex) {
    this.setState({ currencyIndex })
  }

  changeCategory(changeCategoryTo) {
    this.setState({ changeCategoryTo })
  }

  addRemoveFromCart(idValue, decrement = false) {
    const { cartIdValues } = this.state;
    if (decrement) {
      if (!cartIdValues[idValue]) { return }
      cartIdValues[idValue] -= 1;
      if (cartIdValues[idValue] === 0) { delete cartIdValues[idValue] }
    } else {
      !cartIdValues[idValue] && !decrement ? cartIdValues[idValue] = 1 : cartIdValues[idValue] += 1;
    }

    localStorage.setItem("cartIdValues", JSON.stringify(cartIdValues))
    this.setState({ cartIdValues })   
  }

  render() {
    const { currencyIndex, changeCategoryTo, cartIdValues } = this.state;
    return (
      <DataContext.Provider value={{
        changeCurrency: this.changeCurrency,
        addRemoveFromCart: this.addRemoveFromCart,
        cartIdValues: cartIdValues
      }}>
        <HeaderContainer changeCategory={this.changeCategory} currencyIndex={currencyIndex} />
        <ProductsContainer changeCategoryTo={changeCategoryTo} currencyIndex={currencyIndex} />
      </DataContext.Provider>
    )
  }

}