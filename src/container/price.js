import React from "react";
import { PriceDropdown } from "../components";
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
      this.setState({ currencies })
    } catch (err) {
      this.setState({ error: err.message || err.toString() });
      console.log(err)
    }
  }

  render() {
    const { currencies } = this.state;
    const { priceshow } = this.props;
    if (!currencies) {
      return
    }
    return (
      <PriceDropdown priceshow={priceshow}>
        {currencies.map((item) => (
          <PriceDropdown.PriceDropdownItem key={item.label}>
            {item.symbol}&#160;&#160;{item.label}
          </PriceDropdown.PriceDropdownItem>
        ))}
      </PriceDropdown>
    )
  }
}