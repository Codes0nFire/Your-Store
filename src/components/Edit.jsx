import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {

  
    const [products, setproducts] = useContext(ProductContext)
    const navigate=useNavigate()
    const {id}=useParams()
    const [product, setproduct] = useState({})
    
   
   const [title, settitle] = useState('');
   const [price, setprice] = useState('');
   const [description, setdescription] = useState('');
   const [category, setcategory] = useState('');
   const [image, setimage] = useState('');

   useEffect(() => {

    setproduct(products.filter((p,i)=>p.id==id)[0])

   }, [id])

   const onChangeHandler=(e)=>{

    setproduct({...product,[e.target.name]:e.target.value})

    

   }
   

   const handleSubmit = (e) => {
    e.preventDefault();

    const pIdx=products.findIndex((p,i)=>p.id==id)
    const copyproducts=[...products]

    copyproducts[pIdx]=product

    setproducts(copyproducts)

    localStorage.setItem("products",JSON.stringify(copyproducts))

    toast.success("Product Edited Successfully")

    navigate("/")
    
    
  };
   
   
 
   
   
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Product</h2>
        
        {/* Form to create a new product */}
        <form onSubmit={handleSubmit}>
          {/* Product Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Product Title</label>
            <input 
             
              type="text" 
              value={product && product.title}
              name='title'
              onChange={onChangeHandler} 
              placeholder="Enter product title"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Price</label>
            <input 
             
               
              value={product&& product.price}
              name='price'
              onChange={onChangeHandler} 
              placeholder="Enter product price"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea 
             
              value={product&& product.description}
              name='description'
              onChange={onChangeHandler} 
              placeholder="Enter product description"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              rows="3"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Category</label>
            <input
           
              type="text" 
              value={product&& product.category}
              name='category'
              onChange={onChangeHandler} 
              placeholder="Enter product category"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Image URL</label>
            <input 
             
              type="url" 
              value={product&&product.image}
              name='image'
              onChange={onChangeHandler} 
              placeholder="Enter product image URL"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {/* Submit Button */}
          <div className="">
            <button 
              type="submit" 
              className=" bg-blue-400 text-white px-10 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Edit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit
