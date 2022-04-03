import React from "react";
import { Layout } from '../components';

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


        <Layout.LayoutColumnTwo />
        {this.props.children}
      </Layout>
    )
  }
}