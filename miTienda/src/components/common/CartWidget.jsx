import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
      <div style={{ marginRight: '8px' }}>🛒</div>
      <span style={{ fontWeight: 'bold' }}>{cart.length}</span>
    </Link>
  );

};

export default CartWidget;