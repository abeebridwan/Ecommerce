import React from 'react'
import Plp from './pages/plp';
import Cart from "./pages/cart"
//import Pdp from "./pages/Pdp"
//import Cart from "./pages/cart"
//import Cart from "./pages/checkout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
class App extends React.PureComponent {
  render() {
    return (
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
    )
  }
}

export default App;
