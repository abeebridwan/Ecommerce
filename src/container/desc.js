import React from "react";
import { Desc } from "../components";
import { DataContext } from "../context/contextData";
import { getProductData } from "../graphql-data/sendRequest";
export default class DescContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      productId: JSON.parse(sessionStorage.getItem("product")) || null
    }
  }

  async componentDidMount() {
    try {
      const { productId } = this.context
      const productIdValue = productId || JSON.parse(sessionStorage.getItem("productId"));
      console.log({ productIdValue })
      const { product } = await getProductData(productIdValue);
      sessionStorage.setItem("productId", JSON.stringify(productIdValue))
      this.setState({ product })
    } catch (err) {
      console.log(err)
    }
  }

  static contextType = DataContext;

  render() {
    const { product } = this.state;

    if (!product) {
      return null
    }
    console.log({ product })
    return (
      <Desc>
        <Desc.DescColumnOne>
          <Desc.DescSmallImageBox>
            Hello there
          </Desc.DescSmallImageBox>
        </Desc.DescColumnOne>
      </Desc>

    )

  }
}