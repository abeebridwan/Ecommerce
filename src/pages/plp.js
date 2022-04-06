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
    console.log({ value })
    this.setState({ changeCategoryTo: value })
  }

  render() {
    console.log({ state: this.state.changeCategoryTo })
    return (
      <>
        <HeaderContainer changeCategory={this.changeCategory} />
        <ProductsContainer changeCategoryTo={this.state.changeCategoryTo} />
      </>
    )
  }

}