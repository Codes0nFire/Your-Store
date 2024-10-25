import React, { useContext } from 'react';
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [products] = useContext(ProductContext);

  let uniquecat = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  uniquecat = [...new Set(uniquecat)];

  let color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},1)`;
  };

  return (
    <nav className="w-full md:w-[25%] lg:w-[20%] xl:w-[15%] bg-gray-800 text-white flex flex-col p-4 h-auto md:h-screen">
      <Link
        to={"/create"}
        className="bg-blue-500 mt-5 text-white py-2 px-4 rounded mb-6 hover:bg-blue-600 transition-colors text-center"
      >
        Add Product
      </Link>
      <h1 className="text-lg mb-4">Categories</h1>
      <ul className="space-y-4">
        {uniquecat.map((c, i) => (
          <Link
            to={`/?category=${c}`}
            key={i}
            className="flex items-center"
          >
            <span
              style={{ backgroundColor: color() }}
              className="w-4 h-4 rounded-full mr-2"
            ></span>
            {c}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
