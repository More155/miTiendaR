import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  return (
    <Link to="/cart">
       <div style={{ marginLeft: '20px' }}>🛒</div>
       <span style={{ marginLeft: "20px "}}>0</span>
     </Link>
  )
}

export default CartWidget