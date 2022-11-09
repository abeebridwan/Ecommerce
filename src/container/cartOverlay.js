import React from "react";
import { Cart } from "../components";
import { DataContext } from "../context/contextData";
import { getProductData } from "../graphql-data/sendRequest";
import { Link } from "react-router-dom";
import { RemoveScroll } from "react-remove-scroll";
export default class CartOverlayContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      cartValues: null
    }
    this.matchAttr = this.matchAttr.bind(this)
    this.deleteLocalStorage = this.deleteLocalStorage.bind(this)
  }
  async componentDidMount() {
    const { cartIdValues } = this.context;
    const cartIdKey = Object.keys(cartIdValues);

    if (cartIdKey.length !== 0) {
      try {
        const cartValuesPromises = cartIdKey.map(async (item) => {
          return await getProductData(item)
        })
        const cartValues = await Promise.all(cartValuesPromises)
        this.setState({ cartValues })
      } catch (err) {
        console.log(err)
      }
    }
  }
  matchAttr(productId, attriId) {
    const { getAttri } = this.context;
    if (!attriId || !productId) {
      return false;
    }
    const attrObj = JSON.parse(getAttri(productId)) || false
    if (!attrObj) { return false }
    return attrObj[attriId]
  }
  deleteLocalStorage(changeCategoryToValue){
    localStorage.removeItem(`${changeCategoryToValue}FilterColorAttr`);
    localStorage.removeItem(`${changeCategoryToValue}FilterCheckAttr`);
    localStorage.removeItem(`${changeCategoryToValue}FilterSelectedAttr`);
    localStorage.removeItem(`saveFilterCategory`);
    localStorage.removeItem(`saveCategory`);
    localStorage.removeItem(`NotfirstTime`);
  }
  static contextType = DataContext;

  render() {
    const { cartValues } = this.state;

    if (!cartValues) {
      return null
    }

    const { cartshow, cartShowMethod, currencyIndex } = this.props;
    const { cartIdValues, addRemoveFromCart, incrementAttr, decrementAttr, changeCategoryTo } = this.context;
    const cartNumber = Object.values(cartIdValues).reduce((a, b) => { return a + b }, 0)


    return (
      <RemoveScroll removeScrollBar={false}>
        <Cart>
          <Cart.CartFrame cartshow={cartshow}>
            <Cart.CartHeading>
              My Bag, <span>{cartNumber || 0} items</span>
            </Cart.CartHeading>

            <Cart.CartFrameBody>
              {cartValues.map((item) => (
                <Cart.CartItem key={item.product.id} hide={!cartIdValues[item.product.id] || false} >
                  <Cart.CartColumnOne>
                    <Cart.CartName>
                      {item.product.name}
                    </Cart.CartName>
                    <Cart.CartName id="brand">
                      {item.product.brand}
                    </Cart.CartName>
                    <Cart.CartPrice>
                      {item.product.prices[currencyIndex].currency.symbol}
                      {(Math.round((item.product.prices[currencyIndex].amount) * 100 + Number.EPSILON) / 100).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </Cart.CartPrice>

                    {item.product.attributes.map((objAttr) => (
                      objAttr.type === "swatch" ?
                        <Cart.CartAttributes key={objAttr.id}>
                          {objAttr.items.map((attr) => (
                            <Cart.CartBox key={attr.id} displayValue={attr.value} selected={this.matchAttr(item.product.id, objAttr.id) === attr.id} />
                          ))}
                        </Cart.CartAttributes> :
                        <Cart.CartAttributes key={objAttr.id}>
                          {objAttr.items.map((attr) => (
                            <Cart.CartBox id="text" key={attr.id} selected={this.matchAttr(item.product.id, objAttr.id) === attr.id} text >
                              <span>
                                {attr.value}
                              </span>
                            </Cart.CartBox>
                          ))}
                        </Cart.CartAttributes>
                    ))}
                  </Cart.CartColumnOne>

                  <Cart.CartColumnTwo>
                    <Cart.CartSignBox>
                      <Cart.CartAddSign
                        onClick={() => {
                          addRemoveFromCart(item.product.id)
                          incrementAttr(item.product.id, item.product.attributes)
                        }}
                      ><span>&#43;</span></Cart.CartAddSign>
                      <Cart.CartValueSign>
                        {cartIdValues[item.product.id] || 0}
                      </Cart.CartValueSign>
                      <Cart.CartSubSign
                        onClick={() => {
                          addRemoveFromCart(item.product.id, true)
                          if (Object.keys(cartIdValues).length < 1) { cartShowMethod(cartshow) }
                          decrementAttr(item.product.id)
                        }}
                      ><span>&#8722;</span></Cart.CartSubSign>
                    </Cart.CartSignBox>
                    <Cart.CartImage src={item.product.gallery[0]} alt={item.product.id} />
                  </Cart.CartColumnTwo>
                </Cart.CartItem>
              ))}
            </Cart.CartFrameBody>

            <Cart.CartTotal>
              <Cart.CartTotalName>Total</Cart.CartTotalName>

              <Cart.CartTotalValue>
                {cartValues[0].product.prices[currencyIndex].currency.symbol}
                {cartValues.reduce((previous, current) => (
                  previous + (Math.round((current.product.prices[currencyIndex].amount * cartIdValues[current.product.id]) * 100 + Number.EPSILON) / 100 || 0)
                ), 0).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              </Cart.CartTotalValue>

            </Cart.CartTotal>

            <Cart.CartCheckOutBox>
              <Link to="/cart" onClick={() => {
                cartShowMethod(cartshow)
                this.deleteLocalStorage(changeCategoryTo)
              }}><Cart.CartViewBag><span>VIEW BAG</span></Cart.CartViewBag></Link>
              <Cart.CartCheckOut><span> CHECK OUT</span></Cart.CartCheckOut>
            </Cart.CartCheckOutBox>
          </Cart.CartFrame>
          <Cart.CartHeaderOverlay cartshow={cartshow} onClick={() => {
            cartShowMethod(cartshow)
          }} />
          <Cart.CartOverlay cartshow={cartshow} onClick={() => {
            cartShowMethod(cartshow)
          }} />
        </Cart>
      </RemoveScroll>
    )
  }
}