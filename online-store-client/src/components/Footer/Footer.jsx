import React from 'react'

import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>office</span>
                <span>living</span>
                <span>kitchen</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                {/* <span>Stores</span> */}
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>
                    Welcome to our store, where innovation meets style. We pride ourselves on curating a collection of premium products that seamlessly blend cutting-edge technology with timeless design. Explore our world and discover a perfect fusion of form and function, tailored to elevate your lifestyle
                </span>
            </div>
            <div className="item">
            <h1>Contact</h1>
            <div className="mail">
                <input type='text' placeholder='lungu.andrei1896@gmail.com'/>
                <button>TEXT ME</button>
            </div>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">MyHomeDeco</span>
                <span className="copyright">© Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer