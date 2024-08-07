import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function MyNav({curruntUser,removeUser}) {

 let navigate= useNavigate()

function logout(){
  let check =window.confirm("Are you sure to logout")
  if(check){
    removeUser()
    navigate('/login')
  }
}



  return (
    <div className=''>
<nav className="navbar  fixed-top top-0 w-100 navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/">My Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {curruntUser?    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
    
     
      </ul>:''}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {curruntUser? <>
          <li className="nav-item">
          <span className="nav-link" >{curruntUser}</span>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  onClick={logout} >Logout</Link>
        </li>
        </>:<>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
          </>}
    
      
    
     
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}
