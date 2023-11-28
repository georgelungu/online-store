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
    console.log(data)

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate magni tempore porro reiciendis quas aliquid quae dolore architecto earum qui necessitatibus, quis cumque modi impedit perferendis? Commodi porro eius sequi molestias rem!
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