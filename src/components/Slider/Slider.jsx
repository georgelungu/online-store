import React from 'react'

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

import "./Slider.scss"

// Component used to add some photos on the first part of the Home Page
// That will be slided on the x axis by the user.
const Slider = () => {
    const data = [
        // All of these pictures have a width of 1600px
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]

    return (
        <div className='slider'>
            <div className="container">
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon">
                    <WestOutlinedIcon />
                </div>
                <div className="icon">
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider