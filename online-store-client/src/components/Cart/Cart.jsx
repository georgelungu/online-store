import React from 'react'

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import './Cart.scss'

import { removeItem, resetCart } from '../../redux/cartReducer'
import { useDispatch, useSelector } from "react-redux"

import {loadStripe} from '@stripe/stripe-js';

import axios from 'axios'

const Cart = () => {

  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch()

  const totalPrice = () =>
  {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2)
  }

  const stripePromise = loadStripe("pk_test_51OJN9xIMhOoclKgQcqiCmU6DQsvGd5Dp0hNo3EfBp6oClwoYOhnqcLeefoZt8f6OmqiUsCYiRscE0NpRk5Ha5KZB00zdYixjJY");

  const upload = import.meta.env.VITE_APP_UPLOAD_URL;

  const handlePayment = async () =>
  {
    try 
    {
      const stripe = await stripePromise

      const response = await axios.post("/orders", {
        products
      })
      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id
      })
    } 
    catch (error) 
    {
      console.log(error)
    }
  }

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
          <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart