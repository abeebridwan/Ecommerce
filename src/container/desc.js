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
      productId: JSON.parse(sessionStorage.getItem("product")) || null
    }
    this.generateKey = this.generateKey.bind(this)
  }
  generateKey = (pre, index) => {
    return `${pre}_${new Date().getTime()}_${index}`;
  }
  async componentDidMount() {
    try {
      const { productId } = this.context
      const productIdValue = productId || JSON.parse(sessionStorage.getItem("productId"));
      const { product } = await getProductData(productIdValue);
      sessionStorage.setItem("productId", JSON.stringify(productIdValue))
      this.setState({ product })
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
    const { selected, currencyIndex } = this.context;
    console.log(product.description)
    return (
      <Desc>
        <Desc.DescColumnOne>
          <Desc.DescSmallImageBox>
            {product.gallery.map((src, index) => (
              <Desc.DescSmallImage src={src} alt={product.name} key={this.generateKey(product.name, index)} />
            ))}
          </Desc.DescSmallImageBox>
          <Desc.DescBigImage src={product.gallery[current]} alt={product.name} />
        </Desc.DescColumnOne>
        <Desc.DescColumnTwo>
          <Desc.DescName>{product.name}</Desc.DescName>
          <Desc.DescName id="brand">{product.brand}</Desc.DescName>
          {product.attributes.map((attri) => (
            attri.type === "swatch" ?
              <Desc.DescAttriBox key={attri.id}>
                <Desc.DescAttriText>{attri.name}:</Desc.DescAttriText>
                <Desc.DescAttributes>
                  {attri.items.map((attriItem) => (
                    <Desc.DescBox key={attriItem.id} displayValue={attriItem.value} selected={selected === attriItem.displayValue} />
                  ))}
                </Desc.DescAttributes>
              </Desc.DescAttriBox> :
              <Desc.DescAttriBox key={attri.id}>
                <Desc.DescAttriText>{attri.name}:</Desc.DescAttriText>
                <Desc.DescAttributes>
                  {attri.items.map((attriItem) => (
                    <Desc.DescBox key={attriItem.id} selected={selected === attriItem.displayValue} text>
                      {attriItem.value}
                    </Desc.DescBox>
                  ))}
                </Desc.DescAttributes>
              </Desc.DescAttriBox>
          ))}

          <Desc.DescPriceText>Price:</Desc.DescPriceText>
          <Desc.DescPrice>
            {product.prices[currencyIndex].currency.symbol}
            {product.prices[currencyIndex].amount}
          </Desc.DescPrice>
          <Desc.DescAddToCart>ADD To CART</Desc.DescAddToCart>
          {<div dangerouslySetInnerHTML={{ __html: product.description }} />}
        </Desc.DescColumnTwo>
      </Desc>

    )

  }
}