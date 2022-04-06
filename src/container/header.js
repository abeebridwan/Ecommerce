import React from "react";
import { Layout } from '../components';
import { ReactComponent as Logo } from '../assets/Logo.svg'
import { ReactComponent as Price } from '../assets/Price.svg'
import { ReactComponent as Arrow } from '../assets/Arrow.svg'
import { ReactComponent as Cart } from '../assets/Cart.svg'
import { DropdownMenu } from "../components/layout/style/layout";
import { getAllCategoriesNames } from '../graphql-data/sendRequest';

export default class HeaderContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      active: "all",
      categories: null
    }
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
    const { active, categories } = this.state;

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
            <Arrow id="categoryArrow" />

            <DropdownMenu className="dropDownMenu">
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
            </DropdownMenu>
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