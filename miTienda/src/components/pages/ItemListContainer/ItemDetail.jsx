import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../../data/products";
import Counter from "../../common/counter/counter";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productSelected = products.find((el) => el.id === +id);
    setProduct(productSelected);
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