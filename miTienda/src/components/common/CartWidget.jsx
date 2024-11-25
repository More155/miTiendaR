import React from 'react'
import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <Link to="/cart">
       <div style={{ marginLeft: '20px' }}>🛒</div>
       <span>0</span>
     </Link>
  )
}

export default CartWidget