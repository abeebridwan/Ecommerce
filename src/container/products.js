import React from "react";
import { Product } from "../components";
import { getCategoryApiMethod } from '../graphql-data/sendRequest';
import { ReactComponent as Cart } from '../assets/Cart.svg';
import { DataContext } from "../context/contextData";


export default class ProductsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      category: null
    }
  }
  async componentDidMount() {
    try {
      const { changeCategoryTo } = this.props;
      const { category } = await getCategoryApiMethod(changeCategoryTo)
      this.setState({ category })
    } catch (err) {
      console.log(err)
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.changeCategoryTo !== this.props.changeCategoryTo) {
      try {
        const { changeCategoryTo } = this.props;
        const { category } = await getCategoryApiMethod(changeCategoryTo)
        this.setState({ category })
      } catch (err) {
        console.log(err)
      }
    }
  }
  static contextType = DataContext;
  render() {
    const { category } = this.state;

    if (!category) {
      return null;
    }

    const { name, products } = category;
    const { addRemoveFromCart } = this.context;
    const { currencyIndex } = this.props;


    return (
      <Product>
        <Product.ProductHeader>
          {name}
        </Product.ProductHeader>
        <Product.ProductFrame>
          {products.map((item) => (
            <Product.ProductItem key={item.id}>
              <Product.ProductImage src={item.gallery[0]} alt={item.name} />
              <Product.ProductName>
                {item.name}
              </Product.ProductName>
              <Product.ProductPrice>
                {item.prices[currencyIndex].currency.symbol}{item.prices[currencyIndex].amount}
              </Product.ProductPrice>
              <Product.ProductCart onClick={() => {
                addRemoveFromCart(item.id)
              }}>
                <Cart id="cart" />
              </Product.ProductCart>
            </Product.ProductItem>
          ))}
        </Product.ProductFrame>
      </Product>
    )
  }
}