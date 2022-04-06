import React from "react";
import HeaderContainer from '../container/header';
import ProductsContainer from '../container/products';

export default class Plp extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      changeCategoryTo: "all",
      error: null
    };
    this.changeCategory = this.changeCategory.bind(this)
  }

  changeCategory(value) {
    this.setState({ changeCategoryTo: value })
  }

  render() {
    return (
      <>
        <HeaderContainer changeCategory={this.changeCategory} />
        <ProductsContainer changeCategoryTo={this.state.changeCategoryTo} />
      </>
    )
  }

}