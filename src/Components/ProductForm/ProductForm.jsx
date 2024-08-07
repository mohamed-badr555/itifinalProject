import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductForm() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [product, setProduct] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (id !== "0") {
      axios.get(`http://localhost:3000/products/${id}`)
        .then(response => {
          setProduct(response.data);
          setImagePreview(response.data.image); 
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  function InputData(e) {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      // console.log(file);
      
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProduct(prev => ({ ...prev, [e.target.name]: reader.result }));
          setImagePreview(reader.result); // Update the preview
        };
        reader.readAsDataURL(file);
      }
    } else {
      setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  }

  function producthandle(e) {
    e.preventDefault();
    if (id === "0") {
      axios.post('http://localhost:3000/products', product)
        .then(() => navigate('/products'));
    } else {
      axios.put(`http://localhost:3000/products/${id}`, product)
        .then(() => navigate('/products'));
    }
  }

  return (
    <div className='pt-5 my-5'>
      <div className="container">
        <h2 className='text-center mb-4 text-success'>{id === "0" ? 'Add New Product' : 'Edit Product'}</h2>
        <form onSubmit={producthandle} className='mb-5 w-75 m-auto'>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Product Name</label>
            <input
              onChange={InputData}
              type="text"
              className="form-control"
              id="name"
              name='name'
              value={product.name || ''}
              aria-describedby="emailHelp" required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Product Price</label>
            <input
              onChange={InputData}
              type="number"
              className="form-control"
              id="price"
              name='price'
              value={product.price || ''}
              aria-describedby="emailHelp" required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Product Quantity</label>
            <input
              onChange={InputData}
              type="number"
              className="form-control"
              id="quantity"
              name='quantity'
              value={product.quantity || ''}
              aria-describedby="emailHelp" required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Product Image</label>
            <input
              onChange={InputData}
              type="file"
              className="form-control"
              accept='image/*'
              id="image"
              name='image'
              aria-describedby="emailHelp" required
            />
            {imagePreview && id !=0 && <img src={imagePreview} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
          </div>
          <button type="submit" className="btn btn-success">{id === "0" ? 'Add New Product' : 'Edit Product'}</button>
        </form>
      </div>
    </div>
  );
}
