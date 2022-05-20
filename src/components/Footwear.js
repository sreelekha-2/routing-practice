import React from 'react'

import {Link} from "react-router-dom"


export default function Footwear(props) {
  
  return (
    <div className="container">
      <div className="list-unstyled d-flex flex-wrap">
        {props.products.map((product,index)=>{
         return (<Link key={product.id} className="product" to={`${product.id}`}>
            <img src={product.imageUrl} className="product-img"/>
            <p>{product.title}</p>
          </Link>)
        })}
      </div>
    </div>
  )
}
