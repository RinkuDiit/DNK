import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {


    const mycard = localStorage.getItem('cartlength');
  



   

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light position-absolute header">
  <div class="container-fluid">
   <Link to='/'> <div class="navbar-brand" href="#">
      <div className="logo"><img src={require('../components/img/logo@2x-free-img-120x40.png')} alt="#" /></div>
    </div></Link>
    <div className="nav-profile desk-profile ">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li  class="nav-item">About</li>
        <li class="nav-item">Contact</li>
        <Link style={{color:'black'}} to='/cart'><li class="nav-item"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"><sup>{mycard}</sup></i></li></Link>
        <Link style={{color:'black'}} to='/profile'><li class="nav-item"><i class="fa fa-user fa-2x" aria-hidden="true"></i></li></Link>

        </ul>
      </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navlist" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={'/everythings'} class="nav-link active" aria-current="page" href="#">EVERYTHINGS</Link>
        </li>
      
        <li class="nav-item">
          <Link to={'/furniture'} class="nav-link active" aria-current="page" href="#">FURNITURE</Link>
        </li>
        <li class="nav-item">
          <Link to={'/cloths'} class="nav-link active" aria-current="page" href="#">CLOTHES</Link>
        </li>
        <li class="nav-item">
          <Link to={'/accessories'} class="nav-link active" aria-current="page" href="#">ACCESSORIES</Link>
        </li>
        <li class="nav-item">
          <Link to={'/shoes'} class="nav-link active" aria-current="page" href="#">SHOES</Link>
        </li>
        
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn" type="submit">Search</button>
      </form> */}

<div className="nav-profile">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link style={{color:'black'}} to='/about'><li  class="nav-item">About</li></Link>
        <li class="nav-item">Help</li>
        <Link style={{color:'black'}} to='/cart'><li class="nav-item"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"><sup>{mycard}</sup></i></li></Link>
        <Link style={{color:'black'}} to='/profile'><li class="nav-item"><i class="fa fa-user fa-2x" aria-hidden="true"></i></li></Link>

        </ul>
      </div>
     
    </div>
    
  </div>
</nav>
    </div>
  )
}

export default Header