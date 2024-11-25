import React from 'react';
import "./Cards.css"

export const Cards = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt={product.title} />
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
    </div>
  );
};
