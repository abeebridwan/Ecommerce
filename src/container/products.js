import React from "react";
import { Product } from "../components";
import { getCategoryApiMethod } from '../graphql-data/sendRequest';

export default class ProductsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      error: null
    }
  }
  async componentDidMount() {
    try {
      const { changeCategoryTo } = this.props;
      const { category } = await getCategoryApiMethod(changeCategoryTo)
      this.setState({ category })
    } catch (err) {
      this.setState({ error: err.message || err.toString() });
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
        this.setState({ error: err.message || err.toString() });
        console.log(err)
      }
    }
  }

  render() {
    const { category } = this.state;

    if (!category) {
      return;
    }
    const { name, products } = category;
    return (
      <Product>
        <Product.ProductHeader>
          {name}
        </Product.ProductHeader>
        <Product.ProductFrame>
          {products.map((item) => (
            <Product.ProductItem key={item.name}>
              <Product.ProductImage src={item.gallery[0]} alt={item.name} />
              <Product.ProductName>
                {item.name}
              </Product.ProductName>
              <Product.ProductPrice>
                {item.prices[0].currency.symbol}{item.prices[0].amount}
              </Product.ProductPrice>
            </Product.ProductItem>
          ))}
        </Product.ProductFrame>
      </Product>
    )
  }
}