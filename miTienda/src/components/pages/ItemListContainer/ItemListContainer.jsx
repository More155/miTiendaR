import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"; 
import { products as allProducts } from "../../../../data/products";
import ItemList from "./ItemList";
import Cards from "../../common/Cards";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]); 
  const { name } = useParams();  

  useEffect(() => {
    const filteredProducts = name
      ? allProducts.filter((product) => product.category === name)
      : allProducts;

    setMyProducts(filteredProducts);  
  }, [name]);

  return (
    <div>
      <h2>{name ? `Productos de la categoría: ${name}` : "Todos los productos"}</h2>
      <div className="product-list">
        {myProducts.length > 0 ? (
          myProducts.map((product) => (
            <Cards key={product.id} product={product} />  
          ))
        ) : (
          <p>Cargando productos...</p> 
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
