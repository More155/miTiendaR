import Cards from "../../common/Cards";

const ItemList = ({ myProducts }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {myProducts.map((product) => ( 
        <Cards key={product.id} product={product} /> 
      ))}
    </div>
  );
};

export default ItemList;




