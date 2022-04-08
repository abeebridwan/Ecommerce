import React from "react";
import HeaderContainer from '../container/header';
import ProductsContainer from '../container/products';
import { DataContext } from "../context/contextData";

export default class Plp extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      changeCategoryTo: "all",
      currencyIndex: localStorage.getItem("index") || 0,
      error: null
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this)
  }

  changeCurrency(currencyIndex) {
    this.setState({ currencyIndex })
  }

  changeCategory(changeCategoryTo) {
    this.setState({ changeCategoryTo })
  }

  render() {
    const { currencyIndex, changeCategoryTo } = this.state;
    return (
      <DataContext.Provider value={this.changeCurrency}>
        <HeaderContainer changeCategory={this.changeCategory} />
        <ProductsContainer changeCategoryTo={changeCategoryTo} currencyIndex={currencyIndex} />
      </DataContext.Provider>
    )
  }

}