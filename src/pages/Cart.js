import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Cart = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  const cartItems = useSelector(state => state.cart);
  const dipatch = useDispatch();

  const handleRemove = (productID)=>{
    dipatch(remove(productID));
  }

  return (
    <div style={{padding:"20px"}}>
      <h3>Cart</h3>

      <div className='cartWrapper'>
        {
          cartItems.map(items=>(
            <div className='cartCard' data-aos="fade-down">
              <img src={items.image} alt="" />
              <h5>{items.title}</h5>
              <h5>{items.price}</h5>
              <button onClick={()=>{handleRemove(items.id)}} className='btn'>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart