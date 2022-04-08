import React from "react";
import { Layout } from '../components';
import { ReactComponent as Logo } from '../assets/Logo.svg'
import { ReactComponent as Price } from '../assets/Price.svg'
import { ReactComponent as ArrowDown } from '../assets/ArrowDown.svg'
import { ReactComponent as Cart } from '../assets/Cart.svg'
import { getAllCategoriesNames } from '../graphql-data/sendRequest';
import PriceDropdown from "./price";

export default class HeaderContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      active: "all",
      categories: null,
      priceshow: false,
      error: null
    };
    this.priceShowMethod = this.priceShowMethod.bind(this);
  }

  priceShowMethod(priceshow) {
    this.setState({ priceshow: !priceshow })
  }

  async componentDidMount() {
    try {
      const { categories } = await getAllCategoriesNames();
      this.setState({ categories })
    } catch (err) {
      this.setState({ error: err.message || err.toString() });
      console.log(err)
    }
  }

  render() {
    const { changeCategory } = this.props;
    const { active, categories, priceshow } = this.state;

    if (!categories) {
      return;
    }
    return (
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
                  changeCategory(item.name)
                  this.setState({ active: item.name })
                }}>
                  <Layout.LayoutCategoryText>
                    {item.name}
                  </Layout.LayoutCategoryText>
                </Layout.LayoutMobileCategory>
              ))}
            </Layout.LayoutDropdownMenu>
          </Layout.LayoutMobileCategory>

          {categories.map((item) => (
            <Layout.LayoutDesktopCategory key={item.name} active={item.name === active ? {} : null} onClick={() => {
              changeCategory(item.name)
              this.setState({ active: item.name })
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

            <Layout.LayoutPrice onClick={() => { this.priceShowMethod(priceshow) }}>
              <Price />
              <ArrowDown id="priceArrow" />
            </Layout.LayoutPrice>
            <PriceDropdown priceShowMethod={this.priceShowMethod} priceshow={priceshow} />

          </Layout.LayoutPriceFrame>
          <Layout.LayoutCartFrame>
            <Cart />
            <Layout.LayoutCartNumber></Layout.LayoutCartNumber>
          </Layout.LayoutCartFrame>
        </Layout.LayoutColumnThree>
        {this.props.children}
      </Layout >
    )
  }
}