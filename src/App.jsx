import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'

import MyNav from './Components/MyNav/MyNav'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import { useEffect, useState } from 'react'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import ProductForm from './Components/ProductForm/ProductForm';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isChecking, setIsChecking] = useState(true);
  
  function ProductedRoute(props){
    if(loggedInUser == null && !isChecking){
      return <Navigate to='/login'/>
    }else {
      return <> {props.children} </>
    }
  }

  function checkReload(){
    if(localStorage.getItem('username') != null && loggedInUser == null){
      getLoggedInUser()
    }
  }

  function removeUserData(){
    localStorage.removeItem('username');
    setLoggedInUser(null)
  }

  function getLoggedInUser(){
    if(localStorage.getItem('username') != null){
      setLoggedInUser(localStorage.getItem('username'));
    }
    setIsChecking(false);
  }

  useEffect(()=>{
    checkReload()
  },[])

  const router = createBrowserRouter([
    { path: '', element:  <Layout curruntUser={loggedInUser} removeUser={removeUserData} />, children:[
        { path: "", element: <ProductedRoute><Home /></ProductedRoute>  },
        {path:'home',element: <ProductedRoute><Home /></ProductedRoute> },
        {path:"products",element: <ProductedRoute><Products/></ProductedRoute>} ,
        {path:"products/:id",element: <ProductedRoute><ProductDetails/></ProductedRoute>} ,
        {path:"products/:id/edit",element: <ProductedRoute><ProductForm/></ProductedRoute>} ,

        {path:'login',element:<Login userInfo={getLoggedInUser}/>},
        {path:'register',element:<Register userInfo={getLoggedInUser} /> }
      ]
    },
    {path:'*',element:<NotFound/> }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
