import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Header = ({ cartItems, setCartOpen }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                  className="ri-shopping-bag-4-line text-xl hover:text-green-500 cursor-pointer"
                  onClick={() => setCartOpen(true)}
                ></i>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {cartItems.length}
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
              <i className="ri-search-line text-xl hover:text-green-500 cursor-pointer"></i>
              <div className="relative">
                <i
                  className="ri-shopping-bag-4-line text-xl hover:text-green-500 cursor-pointer"
                  onClick={() => setCartOpen(true)}
                ></i>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-cyan-800 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {cartItems.length}
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

      </div>
  );
};

export default Header;