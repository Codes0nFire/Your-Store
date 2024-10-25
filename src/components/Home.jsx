import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';

const Home = () => {
  const [products] = useContext(ProductContext);
  let { search } = useLocation();
  let category = decodeURIComponent(search.split('=')[1]);
  const [filterproduct, setfilterproduct] = useState(null);

  useEffect(() => {
    if (!filterproduct || category == 'undefined') {
      setfilterproduct(products);
    }

    if (category != 'undefined') {
      setfilterproduct(products.filter(p => p.category == category));
    }
  }, [category, products]);

  return products ? (
    <div className="flex flex-col md:flex-row h-auto md:h-screen w-full">
      {/* Sidebar Navigation */}
      <Nav />

      {/* Main Content */}
      <div className="w-full md:w-[75%] lg:w-[80%] xl:w-[85%] bg-slate-300 p-4 md:p-8 overflow-auto">
        {search.length > 0 && (
          <Link
            to="/"
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors mb-4 inline-block"
          >
            Home
          </Link>
        )}

        {/* Grid for Product Cards */}
        <div className="overflow-hidden mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterproduct &&
            filterproduct.map((p, i) => (
              <Link
                key={i}
                to={`products/${p.id}`}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <img
                  src={p.image}
                  alt="Product"
                  className="h-40 sm:h-48 md:h-60 w-full object-contain object-top rounded-t-lg mb-4"
                />
                <div className="m-2">
                  <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                    {p.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2 text-center">
                    {p.category}
                  </p>
                  <p className="text-green-600 font-bold text-lg text-center">
                    ${p.price}
                  </p>
                  <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition-colors">
                    Edit
                  </button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
