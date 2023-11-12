import React from 'react'
import { Link } from 'react-router-dom';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className='left'>
                {/* Language selection. */}
                <div className="item">
                    <img src="/img/en.png" alt="language" />
                    <KeyboardArrowDownIcon />
                </div>
                {/* Currency settings */}
                <div className="item">
                    <span>EUR</span>
                    <KeyboardArrowDownIcon />
                </div>
                {/* Women products link. */}
                <div className="item">
                    <Link to="/products/1">Women</Link>
                </div>
                {/* Men products link. */}
                <div className="item">
                    <Link to="/products/2">Men</Link>
                </div>
                {/* Children products link. */}
                <div className="item">
                    <Link to="/products/3">Children</Link>
                </div>
            </div>
            {/* LOGO START */}
            <div className='center'>
                <Link to="/">MyHomeDeco</Link>
            </div>
            {/* LOGO END */}
            <div className='right'>
                <div className='center'>
                    <Link to="/">HomePage</Link>
                </div>
                <div className='center'>
                    <Link to="/">About</Link>
                </div>
                <div className='center'>
                    <Link to="/">Contact</Link>
                </div>
                <div className='center'>
                    <Link to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon />
                    <PersonOutlineOutlinedIcon />
                    <FavoriteBorderOutlinedIcon />
                    <div className="cartIcon">
                        <ShoppingCartOutlinedIcon />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar