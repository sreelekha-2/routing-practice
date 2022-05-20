import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About Us</Link>
        <Link className="nav-link" to="/footwear">Footwear</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
       
      </div>
    </div>
  </div>
</nav>

  )
}
