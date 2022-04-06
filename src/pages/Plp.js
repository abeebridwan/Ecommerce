import React from "react";
import { Product } from "../components";


export default class Plp extends React.Component {



  render() {
    return (
      <Product>
        <Product.ProductHeader>
          Category Name
        </Product.ProductHeader>
        <Product.ProductFrame>
          <Product.ProductItem>
            <Product.ProductImage src='' alt='' />
            <Product.ProductName>
              Yello
            </Product.ProductName>
            <Product.ProductPrice>
              $40
            </Product.ProductPrice>
          </Product.ProductItem>
        </Product.ProductFrame>


      </Product>)
  }
}