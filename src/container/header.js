import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from '../components';
import { ReactComponent as Logo } from '../assets/Logo.svg'
import { ReactComponent as Price } from '../assets/Price.svg'
import { ReactComponent as ArrowDown } from '../assets/ArrowDown.svg'
import { ReactComponent as ArrowTop } from '../assets/ArrowTop.svg'
import { ReactComponent as Cart } from '../assets/Cart.svg'
import { getAllCategoriesNames } from '../graphql-data/sendRequest';
import PriceDropdown from "./price";
import CartOverlay from "./cartOverlay";
import { DataContext } from "../context/contextData";
export default class HeaderContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      active: sessionStorage.getItem("name") || "all",
      categories: null,
      priceshow: false,
      cartshow: false
    };
    this.priceShowMethod = this.priceShowMethod.bind(this);
    this.cartShowMethod = this.cartShowMethod.bind(this);
  }

  priceShowMethod(priceshow) {
    this.setState({ priceshow: !priceshow })
  }

  cartShowMethod(cartshow) {
    if (!cartshow) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%"
    } else {
      document.body.style.position = "static";
    }
    this.setState({ cartshow: !cartshow })
  }

  async componentDidMount() {
    try {
      const { categories } = await getAllCategoriesNames();
      this.setState({ categories })
    } catch (err) {
      console.log(err)
    }
  }
  static contextType = DataContext;

  render() {

    const { changeCategory, currencyIndex, cartIdValues } = this.context;
    const { active, categories, priceshow, cartshow } = this.state;
    if (!categories) {
      return null;
    }

    const cartNumber = Object.values(cartIdValues).reduce((a, b) => { return a + b }, 0)
    return (
      <>
        <Layout>
          <Layout.LayoutColumnOne>

            <Layout.LayoutMobileCategory>
              <Layout.LayoutCategoryText>
                Categories
              </Layout.LayoutCategoryText>
              <ArrowDown id="categoryArrow" />

              <Layout.LayoutDropdownMenu className="dropDownMenu">
                {categories.map((item) => (
                  <Layout.LayoutMobileCategory key={item.name} className='dropItem' onClick={() => {
                    changeCategory(item.name);
                    sessionStorage.setItem("name", item['name']);
                  }}>
                    <Layout.LayoutCategoryText>
                      {item.name}
                    </Layout.LayoutCategoryText>
                  </Layout.LayoutMobileCategory>
                ))}
              </Layout.LayoutDropdownMenu>
            </Layout.LayoutMobileCategory>

            {categories.map((item) => (
              <Layout.LayoutDesktopCategory key={item.name} active={item.name === active} onClick={() => {
                changeCategory(item.name)
                this.setState({ active: item.name });
                sessionStorage.setItem("name", item['name']);
              }}>
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
              <Layout.LayoutPrice onClick={() => {
                if (cartshow) { this.setState({ cartshow: !cartshow }) };
                this.priceShowMethod(priceshow)
              }}>
                <Price />
                {priceshow ? <ArrowTop id="priceArrow" /> : <ArrowDown id="priceArrow" />}
              </Layout.LayoutPrice>
              {priceshow ? <PriceDropdown priceShowMethod={this.priceShowMethod} priceshow={priceshow} /> : null}
            </Layout.LayoutPriceFrame>

            <Layout.LayoutCartFrame >
              <Layout.LayoutCart onClick={() => {
                if (priceshow) { this.setState({ priceshow: !priceshow }) };
                if (Object.keys(cartIdValues).length > 0) {
                  this.cartShowMethod(cartshow)
                }
              }}>
                <Cart />
                {cartNumber ?
                  <Layout.LayoutCartNumber>
                    <span>{cartNumber}</span>
                  </Layout.LayoutCartNumber> :
                  null
                }
              </Layout.LayoutCart>
              {cartshow && Object.keys(cartIdValues).length ? <CartOverlay cartshow={cartshow}
                cartShowMethod={this.cartShowMethod} currencyIndex={currencyIndex} /> : null}
            </Layout.LayoutCartFrame>
          </Layout.LayoutColumnThree>
          {this.props.children}
        </Layout >
        <Outlet />
      </>
    )
  }
}