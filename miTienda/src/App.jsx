import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import Cart from "./components/pages/cart/Cart";
import ItemDetail from "./components/pages/ItemListContainer/ItemDetail";
import { CartContextProvider } from "./context/CartContext";

function App() {

  return (
    <BrowserRouter>
    <CartContextProvider>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ItemDetail/:id" element={<ItemDetail />} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

