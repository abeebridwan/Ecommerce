import React from "react";
import { Product } from "../components";
import { getCategoryApiMethod } from '../graphql-data/sendRequest';
import { ReactComponent as Cart } from '../assets/Cart.svg';
import { DataContext } from "../context/contextData";
import { Link } from "react-router-dom";
import Attributes from "./attr";
import { ReactComponent as Filter } from "../assets/Filter.svg"
export default class ProductsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      changeCategoryToValue: "all",
      attrShow: false,
      id: null,
      addToCart: false,
      category: null
    }
    this.attrStatusMethod = this.attrStatusMethod.bind(this)
  }
  static contextType = DataContext;

  attrStatusMethod(attrShow, id) {
    this.setState({ attrShow: !attrShow, id })
  }

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
    const { addRemoveFromCart, currencyIndex, pickedProduct } = this.context;
    const { attrShow, id } = this.state
    return (
      <Product>
        <Product.ProductFilter><Filter /> <span>Filter by Attributes</span></Product.ProductFilter>
        <Product.ProductHeader>
          {name}
        </Product.ProductHeader>
        <Product.ProductFrame>
          {products.map((item) => (
            <Product.ProductItem
              onClick={(e) => {
                pickedProduct(item.id, item.category);
                sessionStorage.setItem("name", item.category);
              }} key={item.id} >
              <Link to="/pdp">
                <span className="item" >
                  <Product.ProductImage src={item.gallery[0]} alt={item.name} inStock={item.inStock} />
                  {item.inStock ? null : <Product.ProductInStock inStock={item.inStock}>OUT OF STOCK</Product.ProductInStock>}
                  {item.inStock ? <Product.ProductCart className="cartBox" inStock={item.inStock} onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                    if (item.attributes[0]) {
                      this.attrStatusMethod(attrShow, item.id)
                      return;
                    }
                    addRemoveFromCart(item.id)
                  }}>
                    <Cart id="cart" />
                  </Product.ProductCart> : null}
                </span>
                <Product.ProductName inStock={item.inStock}>
                  {item.name}
                </Product.ProductName>
                <Product.ProductPrice inStock={item.inStock}>
                  {item.prices[currencyIndex].currency.symbol}
                  {(Math.round((item.prices[currencyIndex].amount) * 100 + Number.EPSILON) / 100).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </Product.ProductPrice>
              </Link>
            </Product.ProductItem>
          ))}
        </Product.ProductFrame>
        {attrShow ? <Attributes id={id} attrShow={attrShow} attrMethod={this.attrStatusMethod} /> : null}
      </Product >
    )
  }
}