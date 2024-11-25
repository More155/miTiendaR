import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import { ItemListContainer } from './components/pages/ItemListContainer/ItemListContainer';
import Cart from "./components/pages/cart/Cart";
import ItemDetail from "./components/pages/ItemListContainer/ItemDetail";

function App() {

  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<h2>Home</h2>} /> 
        <Route path="/cart" element={<Cart />} />
        <Route 
          path="/productos" 
          element={<ItemListContainer greeting="Bienvenido a mi tienda" />} />
        <Route path="/ItemDetail/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

