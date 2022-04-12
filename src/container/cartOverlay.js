import React from "react";
import { Cart } from "../components";
import { DataContext } from "../context/contextData";
import { getProductData } from "../graphql-data/sendRequest";

export default class CartOverlayContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      cartValues: null
    }
  }
  async componentDidMount() {
    const { cartIdValues } = this.context;
    const cartIdKey = Object.keys(cartIdValues);
    const { cartshow } = this.props;

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

    if (cartshow) {
      document.body.style.overflow = "hidden";
      document.body.style["padding-right"] = "15px"
    }
  }
  static contextType = DataContext;

  render() {
    const { cartValues } = this.state;

    if (!cartValues) {
      return null
    }

    const { cartshow, cartShowMethod, currencyIndex, selected } = this.props;
    const { cartIdValues, addRemoveFromCart } = this.context;
    const cartNumber = Object.values(cartIdValues).reduce((a, b) => { return a + b }, 0)


    return (
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
                    {(Math.round((item.product.prices[currencyIndex].amount * cartIdValues[item.product.id]) * 100 + Number.EPSILON) / 100).toFixed(2)}
                  </Cart.CartPrice>

                  {item.product.attributes.map((objAttr) => (
                    objAttr.type === "swatch" ?
                      <Cart.CartAttributes key={objAttr.id}>
                        {objAttr.items.map((attr) => (
                          <Cart.CartBox key={attr.id} displayValue={attr.value} selected={selected === attr.displayValue} />
                        ))}
                      </Cart.CartAttributes> :
                      <Cart.CartAttributes key={objAttr.id}>
                        {objAttr.items.map((attr) => (
                          <Cart.CartBox id="text" key={attr.id} selected={selected === attr.displayValue} text >
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
                      }}
                    ><span>&#43;</span></Cart.CartAddSign>
                    <Cart.CartValueSign>
                      {cartIdValues[item.product.id] || 0}
                    </Cart.CartValueSign>
                    <Cart.CartSubSign
                      onClick={() => {
                        addRemoveFromCart(item.product.id, true)
                        if (Object.keys(cartIdValues).length < 1) { cartShowMethod(cartshow) }
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
              ), 0).toFixed(2)}
            </Cart.CartTotalValue>

          </Cart.CartTotal>

          <Cart.CartCheckOutBox>
            <Cart.CartViewBag><span>VIEW BAG</span></Cart.CartViewBag>
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

    )
  }
}