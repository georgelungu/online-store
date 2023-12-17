import React, { useState } from 'react'

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

import "./Slider.scss"

// Component used to add some photos on the first part of the Home Page
// That will be slided on the x axis by the user.
const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    // <img src="/img/Floating_Object_B_8.png" alt="" />
    // <img src="/img/Tea_Infuser_Strainer_1.png" alt="" />
    // <img src="/img/Vintage_Foldable_Hanging_Lamp_6.png" alt="" />

    const data = [
        // All of these pictures have a width of 1600px
        "/img/Floating_Object_B_8.png",
        "/img/Tea_Infuser_Strainer_1.png",
        "/img/Vintage_Foldable_Hanging_Lamp_6.png"
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1)
        console.log(currentSlide)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1)
        console.log(currentSlide)
    }

    return (
        <div className='slider'>
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider