import React from 'react'

import './List.scss'

import Card from '../Card/Card'

import useFetch from '../../hooks/useFetch'

const List = ({ subCats, maxPrice, sort, catId }) => {

  const filter = subCats
  .map(item => `&[filters][sub_categories][id][$eq]=${item}`) 
  .join("");

const sortParam = sort ? `&sort=price:${sort}` : '';

const {data, loading, error} = useFetch(
  `/products?populate=*&[filters][categories][id]=${catId}${filter}&[filters][price][$lte]=${maxPrice}${sortParam}`
);


  // console.log("category id: " + catId)
  // console.log("sub category: " + subCats)
  // console.log("the data i fetched: " + data)

  return (
    <div className='list'>
        {loading 
          ? "loading"
          : data?.map(item => (
              <Card item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default List