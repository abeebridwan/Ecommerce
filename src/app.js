import React from 'react'
import { DataContext } from "./context/contextData";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Plp from './pages/plp';
import Cart from "./pages/cart"
//import Pdp from "./pages/Pdp"
//import Cart from "./pages/cart"
//import Cart from "./pages/checkout"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      changeCategoryTo: sessionStorage.getItem("name") || "all",
      currencyIndex: localStorage.getItem("index") || 0,
      cartIdValues: JSON.parse(localStorage.getItem("cartIdValues")) || {}
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.addRemoveFromCart = this.addRemoveFromCart.bind(this)
  }

  changeCurrency(currencyIndex) {
    this.setState({ currencyIndex })
  }

  changeCategory(changeCategoryTo) {
    this.setState({ changeCategoryTo })
  }

  addRemoveFromCart(idValue, decrement = false) {
    const { cartIdValues } = this.state;
    if (decrement) {
      if (!cartIdValues[idValue]) { return }
      cartIdValues[idValue] -= 1;
      if (cartIdValues[idValue] === 0) { delete cartIdValues[idValue] }
    } else {
      !cartIdValues[idValue] && !decrement ? cartIdValues[idValue] = 1 : cartIdValues[idValue] += 1;
    }

    localStorage.setItem("cartIdValues", JSON.stringify(cartIdValues))
    this.setState({ cartIdValues })
  }
  render() {
    const { cartIdValues, changeCategoryTo, currencyIndex } = this.state;
    return (
      <DataContext.Provider value={{
        changeCurrency: this.changeCurrency,
        addRemoveFromCart: this.addRemoveFromCart,
        cartIdValues: cartIdValues,
        changeCategory: this.changeCategory,
        changeCategoryTo: changeCategoryTo,
        currencyIndex: currencyIndex
      }}>
        <Router>
          <Routes>
            <Route path="/" element={<Plp />} />
            <Route path="/cart" element={<Cart />} />
            {/* 
            <Route path="/detail" element={<Pdp/>} /> 
            <Route path="/checkout" element={<Checkout/>} /> 
            */  }
            {/* <Route element={<Error/>} /> */}
          </Routes>
        </Router>
      </DataContext.Provider>
    )
  }
}

export default App;
