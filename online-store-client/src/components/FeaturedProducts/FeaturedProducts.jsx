import React, { useState, useEffect } from 'react'

// import dotenv from 'dotenv'

import './FeaturedProducts.scss'

import Card from '../Card/Card'

import axios from 'axios'

const FeaturedProducts = ({ type }) => {
    const url = import.meta.env.VITE_APP_API_URL;
    const token = import.meta.env.VITE_APP_API_TOKEN

    // dotenv.config()

    const [ data, setData ] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try 
        {
            const res = await axios.get(url + `/products?populate=*&[filters][type][$eq]=${type}`,{
                headers: {
                    Authorization: "bearer " + token
                }
            })
            console.log(res.data.data)
            // get products from strapi and use them into your frontend by using an useState
            setData(res.data.data)
        } 
        catch (error) 
        {
            console.log(error)
        }
      }
      fetchData()
    }, [])
    

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate magni tempore porro reiciendis quas aliquid quae dolore architecto earum qui necessitatibus, quis cumque modi impedit perferendis? Commodi porro eius sequi molestias rem!
                </p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts