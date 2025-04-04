import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./style.module.scss";
import { getAPIData } from "../../../http/api";
import { X } from "lucide-react";

const BASE_URL = "http://localhost:1337";

const Header = ({ cartItems, setCartOpen }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    const handleEscape = (e) => {
      if (e.key === "Escape") setShowSearch(false);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { data: allProducts } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAPIData("product-totals?populate=*"),
  });

  const filteredData = allProducts?.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      <header
        className={`${styles.root} ${
          isSticky ? "fixed top-0 w-full shadow-md z-20" : "relative"
        } transition-all duration-300`}
      >
        <div className={styles.container}>
          <div className="flex flex-col md:grid md:grid-cols-12 items-center w-full">
            <div className="w-full md:col-span-3 flex justify-between items-center mb-3 md:mb-0">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMenu}
                  className="text-white text-2xl md:hidden"
                >
                  <i className="ri-menu-fill"></i>
                </button>
                <Link to="/">
                  <img
                    src="https://evoluxia-theme.myshopify.com/cdn/shop/files/Evoluxia_Logo.png?v=1702471466&width=300"
                    alt="Logo"
                    className={styles.img}
                  />
                </Link>
              </div>
              <div className="flex items-center gap-4 text-white md:hidden relative">
                <i
                  className="ri-search-line text-xl hover:text-green-500 cursor-pointer"
                  onClick={() => setShowSearch(true)}
                ></i>
                <i
                  className="ri-shopping-bag-4-line text-xl hover:text-green-500 cursor-pointer"
                  onClick={() => setCartOpen(true)}
                ></i>
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {totalQuantity}
                  </span>
                )}
                <i className="ri-user-5-line text-xl hover:text-green-500 cursor-pointer"></i>
              </div>
            </div>

            <div className="hidden md:flex md:col-span-6 justify-center items-center text-white gap-6">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="#about">About</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="#contact">Contact</Link>
            </div>

            <div className="hidden md:col-span-3 md:flex justify-end items-center gap-5 text-white relative">
              <i
                className="ri-search-line text-xl hover:text-green-500 cursor-pointer"
                onClick={() => setShowSearch(true)}
              ></i>
              <div className="relative">
                <i
                  className="ri-shopping-bag-4-line text-xl hover:text-green-500 cursor-pointer"
                  onClick={() => setCartOpen(true)}
                ></i>
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-cyan-800 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </div>
              <i className="ri-user-5-line text-xl hover:text-green-500 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 z-30 bg-black text-white w-4/5 h-full transform transition-transform ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-10 text-lg">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="#about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
          <Link to="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
        <footer className="mt-auto py-6 flex flex-col items-center justify-center">
          <ul className="flex gap-4">
            {[
              { icon: "ri-twitter-line", color: "hover:shadow-blue-500" },
              { icon: "ri-facebook-line", color: "hover:shadow-blue-500" },
              { icon: "ri-instagram-line", color: "hover:shadow-pink-500" },
              { icon: "ri-youtube-line", color: "hover:shadow-red-500" },
            ].map((item, i) => (
              <li
                key={i}
                className={`border rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${item.color}`}
              >
                <i className={item.icon}></i>
              </li>
            ))}
          </ul>
        </footer>
      </div>

      {showSearch && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-80 flex items-center justify-center px-4">
          <div className="bg-[#111217] p-6 rounded-xl shadow-2xl w-full max-w-xl relative animate-fade-in">
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full px-5 py-3 text-white text-lg bg-[#1f1f1f] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 transition"
              autoFocus
            />
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              <i className="ri-close-line"></i>
            </button>
            <div className="mt-4 max-h-72 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-600">
              {filteredData?.length > 0 ? (
                filteredData.map((item, index) => (
                  <Link
                    key={index}
                    to={`/shop/${item.slug}`}
                    onClick={() => setShowSearch(false)}
                    className="flex items-center gap-4 p-3 bg-[#1f1f1f] hover:bg-[#2a2a2a] rounded-lg transition-all duration-200"
                  >
                    <img
                      src={
                        item.image?.url
                          ? `${BASE_URL}${item.image.url}`
                          : "https://via.placeholder.com/60"
                      }
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded-md"
                    />
                    <span className="text-white font-medium">{item.title}</span>
                  </Link>
                ))
              ) : (
                <p className="text-gray-400 text-center text-sm pt-4">
                  No products found.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
