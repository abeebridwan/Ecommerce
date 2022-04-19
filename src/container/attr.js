import React from "react";
import { Attr } from "../components";
import { getAttrData } from "../graphql-data/sendRequest";
import { DataContext } from "../context/contextData";
export default class Attributes extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      attrData: null,
      localAttr: null,
    }
    this.matchAttr = this.matchAttr.bind(this)
    this.getInitialValues = this.getInitialValues.bind(this)
    this.updateValues = this.updateValues.bind(this)
    this.sendOut = this.sendOut.bind(this)
  }
  static contextType = DataContext;

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
    const { toggleAttri } = this.context;
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
      const { id } = this.props;
      const { product } = await getAttrData(id);
      const attrInit = this.getInitialValues(product)
      this.setState({ attrData: product, localAttr: attrInit })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { attrShow, attrMethod } = this.props;
    const { attrData } = this.state

    if (!attrData) {
      return;
    }
    const { addRemoveFromCart } = this.context;
    return (
      <Attr attrShow={attrShow}>
        <Attr.AttriOverlay onClick={() => {
          attrMethod(attrShow)
        }}>
          <Attr.AttriFrame onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}>
            {attrData.name}
            {attrData.attributes.map((item) => (
              item.type === "swatch" ?
                <Attr.AttriContainerBox key={item.id}>
                  <Attr.AttriText>{item.name}:</Attr.AttriText>
                  <Attr.AttriContainer>
                    {item.items.map((attriItem) => (
                      <Attr.AttriBox
                        onClick={() => {
                          this.updateValues(attrData.id, item.id, attriItem.id)
                        }}
                        key={attriItem.id} selected={this.matchAttr(attrData.id, item.id) === attriItem.id} displayValue={attriItem.value} />
                    ))}
                  </Attr.AttriContainer>
                </Attr.AttriContainerBox> :
                <Attr.AttriContainerBox key={item.id}>
                  <Attr.AttriText>{item.name}:</Attr.AttriText>
                  <Attr.AttriContainer>
                    {item.items.map((attriItem) => (
                      <Attr.AttriBox
                        onClick={() => {
                          this.updateValues(attrData.id, item.id, attriItem.id)
                        }}
                        key={attriItem.id} selected={this.matchAttr(attrData.id, item.id) === attriItem.id} text>
                        {attriItem.value}
                      </Attr.AttriBox>
                    ))}
                  </Attr.AttriContainer>
                </Attr.AttriContainerBox>
            ))}
            <Attr.AttriAddToCart
              onClick={() => {
                addRemoveFromCart(attrData.id)
                this.sendOut(attrData.id)
                attrMethod(attrShow)
              }}
            >ADD TO CART</Attr.AttriAddToCart>
            <Attr.AttriCancel
              onClick={() => {
                attrMethod(attrShow)
              }}
            >CANCEl</Attr.AttriCancel>
          </Attr.AttriFrame>
        </Attr.AttriOverlay>
      </Attr>
    )
  }
}