import axios from 'axios'
import React, { useEffect, useState } from 'react'
import phone from '/public/assets/phone.jpg'
import { Link } from 'react-router-dom'

export default function Products() {
  const [products, setProducts] = useState([])
 
async function getAllProducts(){
try {
  let {data} =await axios.get('http://localhost:3000/products')
 setProducts(data)
}catch(error)
{
throw error;
}
}
function deleteproduct(productID){
axios.delete(`http://localhost:3000/products/${productID}`).then((response)=>{
  let newProducts=products.filter( prod => prod.id != productID )
  setProducts(newProducts)
})
}

useEffect(() => {
  
  
  getAllProducts()

// console.log(products);

}, [])


  return (
    <div className='container  pt-5 my-5' >
      {/* {console.log(products)} */}
      <div className="product-header mb-4 d-flex justify-content-between align-items-center">
                    <h1 className='text-center text-muted'>Our Products</h1>
                    <Link to="/products/0/edit">
                        <i className="fs-1 text-primary bi bi-plus-square-fill"></i>
                    </Link>
                </div>
        <div className="row gy-3">
          {products.map((product,idx) => {
            return      <div key={idx} className="col-md-4  ">
            <div className="product d-flex flex-column h-100 justify-content-between w-100  position-relative rounded-1 shadow">
              <div onClick={()=>deleteproduct(product.id)} className="x fs-4 bg-dark  text-danger position-absolute start-0 top-0 p-2">
              <i className="bi bi-x"></i>
              </div>
          <div className="image   mb-2">
          <img src={product.image} className='w-100  d-block  object-fit-cover'  alt="" />
          </div>
              <div className="text p-3">
              <p>Product Name : {product.name} </p>
              <p>Product Price :{product.price} </p>
              <p>Product Quantity : { product.quantity ==0 ? 'Not Available': product.quantity } </p>
              <p  className='d-flex  align-items-center'>Action : 

                <Link to={`/products/${product.id}/edit`}><i className="mx-1 fs-4 text-info bi bi-pencil-square"></i></Link> <span></span>
                <Link to={`/products/${product.id}`}> <i className="mx-1 fs-4 text-warning bi bi-eye-fill"></i></Link>
           

                </p>
              </div>
            </div>
          </div>
         
          })}
        
        </div>

    </div>
  )
}
