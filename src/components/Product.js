import React,{ useState,useEffect} from 'react'

import {useParams} from "react-router-dom"

export default function Product(props) {
    const {id}=useParams();
    

      const [filterData,updateFilterData]=useState([])

      useEffect(()=>{
        async function getFilterData(){
            const filterList=props.products.filter(item=>item.id===parseInt(id))
            updateFilterData(filterList)
        }
        getFilterData()
      },[id])
    
      
  return (
    <div>
        <ul className="list-unstyled">
            {filterData.map(item=> (<li key={item.id} className="d-flex flex-column align-items-center">
                <img src={item.imageUrl} className="big-img"/>
                <h4>{item.title}</h4>
                <p>{item.description}</p>

            </li>))}
        </ul>
    </div>
  )
}
