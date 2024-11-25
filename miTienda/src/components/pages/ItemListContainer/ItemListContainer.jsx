import React, { useState } from 'react';
import Button from '../../Button';

const productos = [
  { categoria: "Paletas", nombre: "Paleta iluminadora" },
  { categoria: "Paletas", nombre: "Paleta full color" },
  { categoria: "Otros", nombre: "Pestañas postizas" },
  { categoria: "Otros", nombre: "Brochas" },
  
];

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState(productos);

  const showPaletas = () => {
    const res = productos.filter(e => e.categoria === "Paletas");
    setProducts(res);
  };

  const showOtros = () => {
    const res = productos.filter(e => e.categoria === "Otros");
    setProducts(res);
  };

  const showAll = () => {
    setProducts(productos);
  };

  return (
    <div>
      <h2>{greeting}</h2>
      <button onClick={showAll}>All</button>
      <button onClick={showPaletas}>Paletas</button>
      <button onClick={showOtros}>Otros</button>

      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.nombre}</h3>
        </div>
      ))}
    </div>
  );
};

