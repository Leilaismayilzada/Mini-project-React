import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaRegSadTear } from 'react-icons/fa';
import Breadcrumbs from '../../components/shared/BreadCrumbs';
import GradientButton from '../../components/shared/ButtonGradient';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const handleRemove = (title) => {
    const filtered = wishlistItems.filter((item) => item.title !== title);
    setWishlistItems(filtered);
    localStorage.setItem('wishlistItems', JSON.stringify(filtered));
  };

  return (
    <div className="text-white  bg-gradient-to-b from-[#0d4249] via-black to-[#3b0e49]">
      <div className="flex flex-col items-center justify-center text-center p-9">
        <div className="text-3xl font-bold p-5">Wishlist</div>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Wishlist', href: '/wishlist' },
          ]}
        />
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center mt-16 text-gray-400 flex flex-col items-center gap-4">
          <FaRegSadTear className="text-5xl text-gray-600" />
          <p className="text-lg">Your wishlist is empty. Start adding your favorites!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 pb-10">
          {wishlistItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#121212] p-4 rounded shadow transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded mb-4 h-64 object-cover w-full transition-transform duration-300 hover:scale-105"
              />
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-green-400 mb-3">Rs. {item.price}.00</p>
              <Link
                to="/shop"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-full block text-center mb-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Select Options
              </Link>
              <button
                onClick={() => handleRemove(item.title)}
                className="text-red-400 text-sm hover:text-red-600 flex items-center justify-center gap-2 w-full transition-all duration-300 hover:scale-105"
              >
                Remove <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
