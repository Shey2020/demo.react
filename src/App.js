import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ProductList from './ProductList';
import CheckOut from './CheckOut';
import ProductDetail from './ProductDetail';
import { CartContext } from "./CartContext";
import { useState } from "react";

function App() {

  const [cartItems,setCartItems]=useState([])

  return (
      <BrowserRouter>

        <CartContext.Provider value={{cartItems,setCartItems}}>

        <Link to="/">Home</Link>
        <Link to="/checkout">Cart</Link>
        <Routes>
            <Route path="/"element={<ProductList/>}/>
            <Route path="/checkout"element={<CheckOut/>}/>

            <Route path="/product_detail"element={<ProductDetail/>}>
              <Route path=":id"element={<ProductDetail/>}/>
            </Route>

            <Route path="*"element={<p>NO page</p>}/>
        </Routes>

        </CartContext.Provider>

      </BrowserRouter>
  );
}

export default App;
