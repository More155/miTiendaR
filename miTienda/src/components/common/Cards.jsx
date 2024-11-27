import React from 'react';
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Precio: ${product.price}</p>
      <Link to={`/itemDetail/${product.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Cards;
