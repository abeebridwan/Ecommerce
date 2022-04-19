import React from "react";
import { Product } from "../components";
import { getCategoryApiMethod } from '../graphql-data/sendRequest';
import { ReactComponent as Cart } from '../assets/Cart.svg';
import { DataContext } from "../context/contextData";
import { Link } from "react-router-dom";
import Attributes from "./attr";

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
    if (!attrShow) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
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
        <Product.ProductHeader>
          {name}
        </Product.ProductHeader>
        <Product.ProductFrame>
          {products.map((item) => (
            <Link to="/pdp" key={item.id}>
              <Product.ProductItem
                onClick={(e) => {
                  pickedProduct(item.id, item.category);
                  sessionStorage.setItem("name", item.category);
                }}>
                <span className="item" >
                  <Product.ProductImage src={item.gallery[0]} alt={item.name} />
                  {item.inStock ? null : <Product.ProductInStock>OUT OF STOCK</Product.ProductInStock>}
                  <Product.ProductCart className="cartBox" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                    if (item.attributes[0]) {
                      this.attrStatusMethod(attrShow, item.id)
                    }
                    addRemoveFromCart(item.id)
                  }}>
                    <Cart id="cart" />
                  </Product.ProductCart>
                </span>
                <Product.ProductName>
                  {item.name}
                </Product.ProductName>
                <Product.ProductPrice>
                  {item.prices[currencyIndex].currency.symbol}
                  {(Math.round((item.prices[currencyIndex].amount) * 100 + Number.EPSILON) / 100).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </Product.ProductPrice>
              </Product.ProductItem>
            </Link>
          ))}
        </Product.ProductFrame>
        {attrShow ? <Attributes id={id} attrShow={attrShow} attrMethod={this.attrStatusMethod} /> : null}
      </Product >
    )
  }
}