import React from "react";
import { getPriceData } from "../graphql-data/sendRequest";

export default class Price extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currencies: null,
      error: null
    }
  }

  async componentDidMount() {
    try {
      const { currencies } = await getPriceData();
      console.log({ currencies });
      this.setState({ currencies })
    } catch (err) {
      this.setState({ error: err.message || err.toString() });
      console.log(err)
    }
  }

  render() {
    const { currencies } = this.state;
    return
  }
}