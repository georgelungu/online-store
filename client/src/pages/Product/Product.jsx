import React, { useState } from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

import "./Product.scss"

// Left at 01:29:10

const Product = () => {

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]

  const [ selectedImage, setSelectedImage ] = useState(0)
  const [ quantity, setQuantity ] = useState(1)


  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img 
            src={images[0]} 
            alt=""
            onClick={e => setSelectedImage(0)} 
          />
          <img 
            src={images[1]} 
            alt=""
            onClick={e => setSelectedImage(1)} 
          />
        </div>
        <div className="mainImg">
          <img 
            src={images[selectedImage]} 
            alt="" 
          />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$50</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima ex voluptas. Voluptates sit laboriosam accusamus! Incidunt expedita, vero dicta, a, error sed vitae ex pariatur blanditiis magnam optio autem quos officia?
        </p>
        <div className="quantity">
            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
              {quantity}
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product