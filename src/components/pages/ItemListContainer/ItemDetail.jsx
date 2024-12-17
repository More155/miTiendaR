import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../../common/counter/counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    const getDocById = getDoc(refDoc);
    getDocById.then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);


  return (
    <div>
      <h2>{product.title}</h2>
      <img style={{width:"300px", heigh:"300px"}} src={product.img} alt="" />
      <h3>{product.description}</h3>
      <Counter product={product} />
    </div>
  );
};

export default ItemDetail;