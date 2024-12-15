import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { products } from "../../data/products";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.title} agregado al carrito!`, {
      position: "bottom-right",   
      autoClose: 3000,           
      hideProgressBar: true,     
      closeOnClick: true,         
      pauseOnHover: true,         
      draggable: true,           
    });
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    let filteredArray = cart.filter((elemento) => elemento.id !== id);
    setCart(filteredArray);
  };

  const getTotalPrice = () => {
    let total = cart.reduce((total, elemento) => {
      return total + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  let data = { cart, addToCart, resetCart, removeProduct, getTotalPrice };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
