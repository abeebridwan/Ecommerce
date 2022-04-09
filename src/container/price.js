import React from "react";
import { PriceDropdown } from "../components";
import { getPriceData } from "../graphql-data/sendRequest";
import { DataContext } from "../context/contextData";

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
  static contextType = DataContext;
  render() {
    const changeCurrency = this.context;
    const { currencies } = this.state;
    const { priceshow, priceShowMethod } = this.props;
    if (!currencies) {
      return
    }

    return (
      <>
        <PriceDropdown priceshow={priceshow}>
          {currencies.map((item, index) => (
            <PriceDropdown.PriceDropdownItem key={item.label} onClick={() => {
              changeCurrency(index);
              priceShowMethod(priceshow);
              localStorage.setItem("index", index);
            }}>
              {item.symbol}&#160;&#160;{item.label}
            </PriceDropdown.PriceDropdownItem>
          ))}
        </PriceDropdown>

        <PriceDropdown.PriceDropdownFrame priceshow={priceshow} onClick={() => {
          priceShowMethod(priceshow);
        }} />
      </>
    )
  }
}