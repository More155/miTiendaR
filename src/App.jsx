import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import Cart from "./components/pages/cart/Cart";
import ItemDetail from "./components/pages/ItemListContainer/ItemDetail";
import { CartContextProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./components/pages/checkout/Checkout";


function App() {

  return (
    <BrowserRouter>
    <CartContextProvider>
      <NavBar /> 
      <ToastContainer /> 
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ItemDetail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;



