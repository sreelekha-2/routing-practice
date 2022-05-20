import React from 'react'
import {Link,Outlet} from "react-router-dom"

export default function Contact() {
  return (
    <div className="d-flex">
        <ul>
            
            <li><Link to="mail">Official Mail</Link></li>
            <li><Link to="phone">Oficial Phone No</Link></li>
        </ul>
        <ul>
            <Outlet/>
        </ul>
    </div>
  )
}
