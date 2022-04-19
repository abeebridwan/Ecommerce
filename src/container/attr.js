import React from "react";
import { Attr } from "../components";
import { getAttrData } from "../graphql-data/sendRequest";
export default class Attributes extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      attrData: null
    }
  }
  async componentDidMount() {
    try {
      const { id } = this.props;
      const { product } = await getAttrData(id);
      console.log({ product })
      this.setState({ attrData: product })
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
                        }}
                        key={attriItem.id} displayValue={attriItem.value} />
                    ))}
                  </Attr.AttriContainer>
                </Attr.AttriContainerBox> :
                <Attr.AttriContainerBox key={item.id}>
                  <Attr.AttriText>{item.name}:</Attr.AttriText>
                  <Attr.AttriContainer>
                    {item.items.map((attriItem) => (
                      <Attr.AttriBox
                        onClick={() => {
                        }}
                        key={attriItem.id} text>
                        {attriItem.value}
                      </Attr.AttriBox>
                    ))}
                  </Attr.AttriContainer>
                </Attr.AttriContainerBox>
            ))}
            <Attr.AttriAddToCart
              onClick={() => {
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