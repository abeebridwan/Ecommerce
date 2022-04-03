import React from "react";
import { Layout } from '../components';
import { ReactComponent as Logo } from '../assets/Logo.svg'
import { ReactComponent as Price } from '../assets/Price.svg'
import { ReactComponent as Arrow } from '../assets/Arrow.svg'
import { ReactComponent as Cart } from '../assets/Cart.svg'

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.LayoutColumnOne>

          <Layout.LayoutCategory>
            <Layout.LayoutCategoryText>
              All
            </Layout.LayoutCategoryText>
          </Layout.LayoutCategory>

          <Layout.LayoutCategory>
            <Layout.LayoutCategoryText>
              Tech
            </Layout.LayoutCategoryText>
          </Layout.LayoutCategory>

          <Layout.LayoutCategory>
            <Layout.LayoutCategoryText>
              Clothes
            </Layout.LayoutCategoryText>
          </Layout.LayoutCategory>

        </Layout.LayoutColumnOne>


        <Layout.LayoutColumnTwo>
          <Logo />
        </Layout.LayoutColumnTwo>

        <Layout.LayoutColumnThree>
          <Layout.LayoutPriceFrame>
            <Layout.LayoutPrice>
              <Price />
              <Arrow />
            </Layout.LayoutPrice>

            <Layout.LayoutCartFrame>
              <Cart />
              <Layout.LayoutCartNumber></Layout.LayoutCartNumber>
            </Layout.LayoutCartFrame>

          </Layout.LayoutPriceFrame>


        </Layout.LayoutColumnThree>
        {this.props.children}
      </Layout>
    )
  }
}