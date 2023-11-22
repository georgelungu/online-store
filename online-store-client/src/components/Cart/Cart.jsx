import React from 'react'

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import './Cart.scss'

// left at 01:38:40
const Cart = () => {

  const data = 
  [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium ratione dolores molestias debitis delectus quas tenetur, vitae assumenda ipsa facere laborum, consequuntur quo qui deserunt mollitia ea amet aliquid quam dicta!",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium ratione dolores molestias debitis delectus quas tenetur, vitae assumenda ipsa facere laborum, consequuntur quo qui deserunt mollitia ea amet aliquid quam dicta!",
      oldPrice: 19,
      price: 12,
    },
  ]

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x {item.price}</div>
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