import React from "react";
import { Layout } from '../components';
import { ReactComponent as Logo } from '../assets/Logo.svg'
import { ReactComponent as Price } from '../assets/Price.svg'
import { ReactComponent as Arrow } from '../assets/Arrow.svg'
import { ReactComponent as Cart } from '../assets/Cart.svg'
import { DropdownMenu } from "../components/layout/style/layout";
import { DataContext } from "../context/contextData";

export default class HeaderContainer extends React.Component {

  static contextType = DataContext;

  render() {
    const { categories } = this.context;
    return (
      <Layout>
        <Layout.LayoutColumnOne>

          <Layout.LayoutMobileCategory>
            <Layout.LayoutCategoryText>
              Categories
            </Layout.LayoutCategoryText>
            <Arrow id="categoryArrow" />

            <DropdownMenu className="dropDownMenu">
              {categories.map((item) => (
                <Layout.LayoutMobileCategory key={item.name} className='dropItem' >
                  <Layout.LayoutCategoryText>
                    {item.name}
                  </Layout.LayoutCategoryText>
                </Layout.LayoutMobileCategory>
              ))}
            </DropdownMenu>
          </Layout.LayoutMobileCategory>

          {categories.map((item) => (
            <Layout.LayoutDesktopCategory key={item.name} active={item.name === 'all' ? {} : null} >
              <Layout.LayoutCategoryText>
                {item.name}
              </Layout.LayoutCategoryText>
            </Layout.LayoutDesktopCategory>
          ))}

        </Layout.LayoutColumnOne>

        <Layout.LayoutColumnTwo>
          <Logo />
        </Layout.LayoutColumnTwo>

        <Layout.LayoutColumnThree>
          <Layout.LayoutPriceFrame>
            <Layout.LayoutPrice>
              <Price />
              <Arrow id="priceArrow" />
            </Layout.LayoutPrice>
          </Layout.LayoutPriceFrame>
          <Layout.LayoutCartFrame>
            <Cart />
            <Layout.LayoutCartNumber></Layout.LayoutCartNumber>
          </Layout.LayoutCartFrame>
        </Layout.LayoutColumnThree>
        {this.props.children}
      </Layout>
    )
  }
}