import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { makeRequest } from '../makeRequest'


const useFetch = (url) => {

    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    
    useEffect(() => {

        // const url = import.meta.env.VITE_APP_API_URL;
        const token = import.meta.env.VITE_APP_API_TOKEN;
        
        const fetchData = async () => {
            try 
            {
                setLoading(true)
                const res = await makeRequest.get(url)
                console.log(res.data.data)
                // get products from strapi and use them into your frontend by using an useState
                setData(res.data.data)
            } 
            catch (error) 
            {
                setError(true)
                console.log(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [url])

    return { data, loading, error }
}

export default useFetch