import React from 'react'

import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div>
        <div className="bg-container">
            <div className="container">
                <div className="banner d-flex flex-column align-items-center justify-content-center">
                    <h2>We have so much offers for you</h2>
                    <Link to="/footwear" className="btn btn-primary">Shop Now</Link>
                </div>
               
            </div>
            
        </div>
    </div>
  )
}
