import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  // here state hold the complete state of the appication
  const items = useSelector((state)=>{
      return state.cart;
  });
  return (
    <div style={{display:"flex" ,justifyContent:"space-between",padding:"10px"}}>
      <span className='logo'>TechAshu</span>
      <div>
        <Link className='navLink'  to="/">HOME</Link>
        <Link className='navLink' to="/cart">CART</Link>
        <span className='cartCount'>items: {items.length}</span>
      </div>
    </div>
  )
}

export default Navbar