import React from "react";
import { Product } from "../components";
import { getCategoryApiMethod } from '../graphql-data/sendRequest';
import { ReactComponent as Cart } from '../assets/Cart.svg';
import { DataContext } from "../context/contextData";
import { Link } from "react-router-dom";


export default class ProductsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      changeCategoryToValue: "all",
      category: null
    }
  }
  static contextType = DataContext;

  async componentDidMount() {
    try {
      const { changeCategoryTo } = this.context;
      const { category } = await getCategoryApiMethod(changeCategoryTo)
      this.setState({ category })
    } catch (err) {
      console.log(err)
    }
  }

  async componentDidUpdate() {
    const { changeCategoryTo } = this.context;
    let { changeCategoryToValue } = this.state
    if (changeCategoryTo !== changeCategoryToValue) {
      try {
        const { category } = await getCategoryApiMethod(changeCategoryTo)
        changeCategoryToValue = changeCategoryTo;
        this.setState({ category, changeCategoryToValue })
      } catch (err) {
        console.log(err)
      }
    }
  }
  render() {
    const { category } = this.state;

    if (!category) {
      return null;
    }

    const { name, products } = category;
    const { addRemoveFromCart, currencyIndex } = this.context;
    const { pickedProduct } = this.context;

    return (
      <Product>
        <Product.ProductHeader>
          {name}
        </Product.ProductHeader>
        <Product.ProductFrame>
          {products.map((item) => (
            <span key={item.id}>
              <Link to="/pdp" >
                <Product.ProductItem
                  onClick={() => {
                    pickedProduct(item.id)
                  }}
                >
                  <Product.ProductImage src={item.gallery[0]} alt={item.name} />
                  <Product.ProductName>
                    {item.name}
                  </Product.ProductName>
                  <Product.ProductPrice>
                    {item.prices[currencyIndex].currency.symbol}{item.prices[currencyIndex].amount}
                  </Product.ProductPrice>
                </Product.ProductItem>
              </Link>

              <Product.ProductCart onClick={() => {
                addRemoveFromCart(item.id)
              }}>
                <Cart id="cart" />
              </Product.ProductCart>
            </span>
          ))}
        </Product.ProductFrame>
      </Product >
    )
  }
}