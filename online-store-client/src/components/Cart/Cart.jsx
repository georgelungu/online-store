import React from 'react'

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import './Cart.scss'

import { useSelector } from "react-redux"

// left at 02:44:00

const Cart = () => {

  const products = useSelector(state => state.cart.products)

  const upload = import.meta.env.VITE_APP_UPLOAD_URL;

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map(item => (
        <div className="item" key={item.id}>
          <img src={upload + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x {item.price}</div>
          </div>
          <DeleteOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart