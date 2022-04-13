import React from "react";
import { PageCart } from "../components";
import { getProductData } from "../graphql-data/sendRequest";
import { DataContext } from "../context/contextData";
export default class CartContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      cartValues: null
    }
  }
  static contextType = DataContext;

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
  render() {
    const { cartValues } = this.state;

    if (!cartValues) {
      return null
    }
    const { selected, currencyIndex, cartIdValues, addRemoveFromCart } = this.context;
    return (
      <PageCart>
        <PageCart.CartPageFrame>
          <PageCart.CartPageHeader>CART</PageCart.CartPageHeader>
          {cartValues.map((item) => (
            <PageCart.CartPageItem class="item" key={item.product.id} hide={!cartIdValues[item.product.id] || false}>
              <PageCart.CartPageColumnOne>
                <PageCart.CartPageName>
                  {item.product.name}
                </PageCart.CartPageName>
                <PageCart.CartPageName id="brand">
                  {item.product.brand}
                </PageCart.CartPageName>
                <PageCart.CartPagePrice>
                  {item.product.prices[currencyIndex].currency.symbol}
                  {(Math.round((item.product.prices[currencyIndex].amount * cartIdValues[item.product.id]) * 100 + Number.EPSILON) / 100).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </PageCart.CartPagePrice>

                {item.product.attributes.map((objAttr) => (
                  objAttr.type === "swatch" ?
                    <PageCart.CartPageAttributes key={objAttr.id}>
                      {objAttr.items.map((attr) => (
                        <PageCart.CartPageBox key={attr.id} displayValue={attr.value} selected={selected === attr.displayValue} />
                      ))}
                    </PageCart.CartPageAttributes> :
                    <PageCart.CartPageAttributes key={objAttr.id}>
                      {objAttr.items.map((attr) => (
                        <PageCart.CartPageBox id="text" key={attr.id} selected={selected === attr.displayValue} text >
                          <span>
                            {attr.value}
                          </span>
                        </PageCart.CartPageBox>
                      ))}
                    </PageCart.CartPageAttributes>
                ))}
              </PageCart.CartPageColumnOne>

              <PageCart.CartPageColumnTwo>
                <PageCart.CartPageSignBox>
                  <PageCart.CartPageAddSign
                    onClick={() => {
                      addRemoveFromCart(item.product.id)
                    }}
                  ><span>&#43;</span></PageCart.CartPageAddSign>
                  <PageCart.CartPageValueSign>
                    {cartIdValues[item.product.id] || 0}
                  </PageCart.CartPageValueSign>
                  <PageCart.CartPageSubSign
                    onClick={() => {
                      addRemoveFromCart(item.product.id, true)
                    }}
                  ><span>&#8722;</span></PageCart.CartPageSubSign>
                </PageCart.CartPageSignBox>
                <PageCart.CartPageImage src={item.product.gallery[0]} alt={item.product.id} />
              </PageCart.CartPageColumnTwo>
            </PageCart.CartPageItem>
          ))}
          <PageCart.CartPageTotal>
            <PageCart.CartPageTotalName>Total</PageCart.CartPageTotalName>

            <PageCart.CartPageTotalValue>
              {cartValues[0].product.prices[currencyIndex].currency.symbol}
              {cartValues.reduce((previous, current) => (
                previous + (Math.round((current.product.prices[currencyIndex].amount * cartIdValues[current.product.id]) * 100 + Number.EPSILON) / 100 || 0)
              ), 0).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </PageCart.CartPageTotalValue>

          </PageCart.CartPageTotal>
          <PageCart.CartPageCheckOutBox>
            <PageCart.CartPageCheckOut><span> CHECK OUT</span></PageCart.CartPageCheckOut>
          </PageCart.CartPageCheckOutBox>
        </PageCart.CartPageFrame>
      </PageCart>
    )
  }
}