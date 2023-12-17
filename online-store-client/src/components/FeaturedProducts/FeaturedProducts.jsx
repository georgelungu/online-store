import React from 'react'

// import dotenv from 'dotenv'

import './FeaturedProducts.scss'

import Card from '../Card/Card'

import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({ type }) => {

    console.log(type)
    // const url = import.meta.env.VITE_APP_API_URL;
    const url = `/products?populate=*&[filters][type][$eq]=${type}`;
    const token = import.meta.env.VITE_APP_API_TOKEN;
    
    const { data, loading, error } = useFetch(url)

    // here it returns null and i dont know why
    console.log("featured products data: " + data)

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Elevate your lifestyle with our featured and trending products—a carefully curated selection of the latest innovations and stylish essentials. Stay ahead of the curve, embracing the best in modern living with these must-have items that effortlessly blend functionality and flair.
                </p>
            </div>
            <div className="bottom">
                {error
                    ? "Something went wrong!"
                    : loading
                    ? "loading"
                    : data?.map(item => (
                        <Card item={item} key={item.id}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default FeaturedProducts