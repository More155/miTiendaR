import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"; 
import ItemList from "./ItemList";
import Cards from "../../common/Cards";
import { PuffLoader } from "react-spinners";
import {db} from "../../../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let refCollection = productsCollection;
    if (name) {
      const productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", name)
      );
      refCollection = productsCollectionFiltered;
    }
    const getProducts = getDocs(refCollection);
    getProducts.then((res) => {
      let products = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      }); // []
      setMyProducts(products);
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

