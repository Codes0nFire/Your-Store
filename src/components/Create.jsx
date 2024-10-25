import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';


const Create = () => {

  const [products, setproducts] = useContext(ProductContext)
   const navigate=useNavigate()
   
  
  const [title, settitle] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [image, setimage] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id:nanoid(),
      title,
      price,
      description,
      category,
      image,
    };

    

    // if(title.trim().length<3 || price.trim.length<1 ||
    //   description.trim().length<3 ||
    //   category.trim().length<3 
      
    // ){
    //   alert("Please fill out all field with atleast 3 chars")
    //   return
    // }

    setproducts([...products,newProduct])

    localStorage.setItem("products",JSON.stringify([...products,newProduct]))

    toast.success("Product Created Successfully")

    navigate(-1)
    
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Product</h2>
        
        {/* Form to create a new product */}
        <form onSubmit={handleSubmit}>
          {/* Product Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Product Title</label>
            <input 
             required
              type="text" 
              value={title}
              onChange={(e) => settitle(e.target.value)} 
              placeholder="Enter product title"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Price</label>
            <input 
             required
              type="number" 
              value={price}
              onChange={(e) => setprice(e.target.value)} 
              placeholder="Enter product price"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea 
              required
              value={description}
              onChange={(e) => setdescription(e.target.value)} 
              placeholder="Enter product description"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              rows="3"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Category</label>
            <input
              required
              type="text" 
              value={category}
              onChange={(e) => setcategory(e.target.value)} 
              placeholder="Enter product category"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Image URL</label>
            <input 
              required
              type="url" 
              value={image}
              onChange={(e) => setimage(e.target.value)} 
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
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
