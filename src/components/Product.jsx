import axios from '../utils/axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import { ProductContext } from '../utils/Context';
import { toast } from 'react-toastify';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setproduct] = useState(null);
  const [products, setproducts] = useContext(ProductContext);

  useEffect(() => {
    if (!product && products) {
      // Replace the use of API with filtering from context
      setproduct(products.filter(p => p.id == id)[0]);
    }
  }, [product, products, id]);

  // Delete Product
  const deleteHandler = (id) => {
    let filterproducts = products.filter((p, i) => p.id != id);
    setproducts(filterproducts);
    localStorage.setItem("products", JSON.stringify(filterproducts));
    toast.success("Product Deleted Successfully");
    navigate(-1);
  };

  return product ? (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full flex flex-col md:flex-row">
        {/* Left side: Image */}
        <div className="overflow-hidden rounded-lg mb-4 w-full md:w-1/2">
          <img
            src={product.image}
            alt="Product"
            className="h-auto max-h-80 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" // Adjusted max-height
          />
        </div>

        {/* Right side: Product details */}
        <div className="flex flex-col justify-between w-full md:w-1/2 md:ml-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
            <p className="text-green-600 font-bold text-lg md:text-xl mb-4">${product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-500 italic mb-4">{product.category}</p>
          </div>

          {/* Buttons: Edit and Delete */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link
              to={`/edit/${product.id}`}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full md:w-auto text-center"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteHandler(product.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full md:w-auto text-center"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : <Loading />;
};

export default Product;
