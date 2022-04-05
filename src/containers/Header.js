import React from "react";
import { Layout } from '../components';
import { ReactComponent as Logo } from '../assets/Logo.svg'
import { ReactComponent as Price } from '../assets/Price.svg'
import { ReactComponent as Arrow } from '../assets/Arrow.svg'
import { ReactComponent as Cart } from '../assets/Cart.svg'
import { DropdownMenu } from "../components/layout/style/layout";

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.LayoutColumnOne>
          <Layout.LayoutCategory>
            <Layout.LayoutCategoryText>
              Categories
            </Layout.LayoutCategoryText>
            <Arrow id="arrow" />

            <DropdownMenu className="dropDownMenu">
              {[{ "name": "all" }, { "name": "clothes" }, { "name": "tech" }].map((item) => (
                <Layout.LayoutCategory key={item.name} className = 'dropItem' >
                  <Layout.LayoutCategoryText>
                    {item.name}
                  </Layout.LayoutCategoryText>
                </Layout.LayoutCategory>
              ))}
            </DropdownMenu>
          </Layout.LayoutCategory>



           {[{ "name": "all" }, { "name": "clothes" }, { "name": "tech" }].map((item) => (
            <Layout.LayoutDesktopCategory key={item.name} colorChange={item.name === 'all' ? {} : null} desktop>
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
              <Arrow />
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