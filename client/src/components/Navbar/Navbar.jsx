import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import Cart from '../Cart/Cart';

import "./Navbar.scss"

const Navbar = () => {

    const [open, setOpen] = useState(false)

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
                        <Link className="link" to="/products/1">Women</Link>
                    </div>
                    {/* Men products link. */}
                    <div className="item">
                        <Link className="link" to="/products/2">Men</Link>
                    </div>
                    {/* Children products link. */}
                    <div className="item">
                        <Link className="link" to="/products/3">Children</Link>
                    </div>
                </div>
                {/* LOGO START */}
                <div className='center'>
                    <Link className="link" to="/">MyHomeDeco</Link>
                </div>
                {/* LOGO END */}
                <div className='right'>
                    <div className='item'>
                        <Link className="link" to="/">HomePage</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        {/* In the tutorial it is onClick={() => setOpen(!open)*/}
                        <div className="cartIcon" onClick={() => setOpen(prev => !prev)}>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar