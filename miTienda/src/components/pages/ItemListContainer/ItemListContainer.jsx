import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"; 
import { products as allProducts, products } from "../../../../data/products";
import ItemList from "./ItemList";
import Cards from "../../common/Cards";
import { PuffLoader } from "react-spinners";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter((el) => el.category === name);

    let task = new Promise((res) => {
      setTimeout(() => {
        res(name ? productosFiltrados : products);
      }, 2000);
    });
    task
      .then((resp) => {
        setMyProducts(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finally");
      });
  }, [name]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {myProducts.length === 0 ? (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '100%', 
            width: '100%'   
          }}
        >
          <PuffLoader />
        </div>
      ) : (
        <ItemList myProducts={myProducts} />
      )}
    </div>
  );
};

export default ItemListContainer;

