import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

  async function getProduct() {
    try {
      let { data } = await axios.get(`http://localhost:3000/products?id=${id}`);
      setProduct(data[0]); // Use data[0] to get the first product from the array
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className='container w-50 m-auto pt-5 mt-5'>
      {product ? (
        <div className='card mb-5  w-50'>
          <img src={product.image} className='card-img-top ' alt={product.name} />
          <div className='card-body'>
            <p className='card-title'>Name: {product.name}</p>
            <p className='card-text'>Price: {product.price}</p>
            <p className='card-text'>Quantity: { product.quantity ==0 ? 'not avialable': product.quantity }</p>
            <Link className='btn btn-danger mt-3' to='/products'>Back To Products</Link>

          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
