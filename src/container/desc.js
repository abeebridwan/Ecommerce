import React from "react";
import { Desc } from "../components";
import { DataContext } from "../context/contextData";
import { getProductData } from "../graphql-data/sendRequest";
export default class DescContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      current: 0,
      localAttr: null,
      productId: JSON.parse(sessionStorage.getItem("product")) || null
    }
    this.generateKey = this.generateKey.bind(this)
    this.matchAttr = this.matchAttr.bind(this)
    this.getInitialValues = this.getInitialValues.bind(this)
    this.updateValues = this.updateValues.bind(this)
    this.sendOut = this.sendOut.bind(this)
  }
  generateKey = (pre, index) => {
    return `${pre}_${new Date().getTime()}_${index}`;
  }

  matchAttr(productId, attriId) {
    const { localAttr } = this.state
    const attributes = localAttr[productId][localAttr[productId].length - 1];
    return attributes[attriId]
  }

  updateValues(productId, attriId, attrItemId) {
    const { localAttr } = this.state
    localAttr[productId][0][attriId] = attrItemId
    this.setState({ localAttr: { ...localAttr } })
  }

  sendOut(productId) {
    const { localAttr } = this.state;
    if (Object.keys(localAttr[productId][0]).length === 0) { return; }
    console.log({ localAttr })
    const { toggleAttri } = this.context

    const sendOutValue = localAttr[productId][0]
    toggleAttri(productId, sendOutValue)
  }

  getInitialValues(product) {
    const ObjValue = {}
    ObjValue[product.id] = []
    ObjValue[product.id][0] = {}
    product.attributes.forEach((element) => {
      const objId = element.id;
      const itemId = element.items[1]['id'] || element.items[0]['id']
      ObjValue[product.id][0][objId] = itemId
    })
    return ObjValue
  }

  async componentDidMount() {
    try {
      const { productId } = this.context
      const productIdValue = productId || JSON.parse(sessionStorage.getItem("productId"));
      const { product } = await getProductData(productIdValue);
      sessionStorage.setItem("productId", JSON.stringify(productIdValue))
      const attrInit = this.getInitialValues(product)
      this.setState({ product, localAttr: attrInit })
    } catch (err) {
      console.log(err)
    }
  }

  static contextType = DataContext;

  render() {
    const { product, current } = this.state;

    if (!product) {
      return null
    }
    const { currencyIndex, addRemoveFromCart } = this.context;
    return (
      <Desc>
        <Desc.DescColumnOne>
          <Desc.DescSmallImageBox>
            {product.gallery.map((src, index) => (
              <span id="smallImageContainer" key={this.generateKey(product.name, index)}>
                <Desc.DescSmallImage
                  onClick={() => { this.setState({ current: index }) }}
                  src={src} alt={product.name} />
                {product.inStock ? null : <Desc.DescInStock onClick={() => { this.setState({ current: index }) }} id="smallOne" >OUT OF STOCK</Desc.DescInStock>}
              </span>
            ))}
          </Desc.DescSmallImageBox>
          <span id="bigImageContainer">
            <Desc.DescBigImage src={product.gallery[current]} alt={product.name} />
            {product.inStock ? null : <Desc.DescInStock id="bigOne">OUT OF STOCK</Desc.DescInStock>}
          </span>
        </Desc.DescColumnOne>
        <Desc.DescColumnTwo>
          <Desc.DescName>{product.name}</Desc.DescName>
          <Desc.DescName id="brand">{product.brand}</Desc.DescName>
          {product.attributes.map((attri) => (
            attri.type === "swatch" ?
              <Desc.DescAttriBox key={attri.id}>
                <Desc.DescAttriText>{attri.name}:</Desc.DescAttriText>
                <Desc.DescAttributes>
                  {attri.items.map((attriItem, index) => (
                    <Desc.DescBox
                      onClick={() => {
                        this.updateValues(product.id, attri.id, attriItem.id)
                      }}
                      key={attriItem.id} selected={this.matchAttr(product.id, attri.id) === attriItem.id} displayValue={attriItem.value} />
                  ))}
                </Desc.DescAttributes>
              </Desc.DescAttriBox> :
              <Desc.DescAttriBox key={attri.id}>
                <Desc.DescAttriText>{attri.name}:</Desc.DescAttriText>
                <Desc.DescAttributes>
                  {attri.items.map((attriItem, index) => (
                    <Desc.DescBox
                      onClick={() => {
                        this.updateValues(product.id, attri.id, attriItem.id)
                      }}
                      key={attriItem.id} selected={this.matchAttr(product.id, attri.id) === attriItem.id} text>
                      {attriItem.value}
                    </Desc.DescBox>
                  ))}
                </Desc.DescAttributes>
              </Desc.DescAttriBox>
          ))}

          <Desc.DescPriceText>PRICE:</Desc.DescPriceText>
          <Desc.DescPrice>
            {product.prices[currencyIndex].currency.symbol}
            {(Math.round((product.prices[currencyIndex].amount) * 100 + Number.EPSILON) / 100).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </Desc.DescPrice>
          <Desc.DescAddToCart onClick={() => {
            addRemoveFromCart(product.id)
            this.sendOut(product.id)
          }}>ADD TO CART</Desc.DescAddToCart>
          {<div dangerouslySetInnerHTML={{ __html: product.description }} />}
        </Desc.DescColumnTwo>
      </Desc>

    )

  }
}