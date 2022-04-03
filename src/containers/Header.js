import React from "react";
import { Layout } from '../components';

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.LayoutColumnOne />
        <Layout.LayoutColumnTwo />
        {this.props.children}
      </Layout>
    )
  }
}