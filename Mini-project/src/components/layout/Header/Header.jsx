import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
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
              <div className="flex items-center gap-4 text-white md:hidden">
                <i className="ri-shopping-bag-4-line text-xl hover:text-green-500 cursor-pointer"></i>
                <i className="ri-user-5-line text-xl hover:text-green-500 cursor-pointer"></i>
              </div>
            </div>

            <div className="hidden md:flex md:col-span-6 justify-center items-center text-white gap-6">
              <Link to="#home">Home</Link>
              <Link to="#about">About</Link>
              <Link to="#services">Services</Link>
              <Link to="#products">Products</Link>
              <Link to="#contact">Contact</Link>
            </div>

            <div className="hidden md:col-span-3 md:flex justify-end items-center gap-5 text-white">
              <i className="ri-search-line text-xl hover:text-green-500 cursor-pointer"></i>
              <i className="ri-shopping-bag-4-line text-xl hover:text-green-500 cursor-pointer"></i>
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
        <div className="p-6 relative">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl absolute top-6 right-6"
          >
            <i className="ri-close-line"></i>
          </button>

          <nav className="mt-16">
            <ul className="space-y-6">
              {["home", "about", "services", "products", "contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`#${item}`}
                      className="block text-lg font-semibold hover:bg-gray-600 hover:text-green-500 py-2 px-4 rounded"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>

        <footer className="bg-[#1a202c] mt-auto py-6 flex flex-col items-center justify-center">
          <ul className="flex gap-4">
            {[
              { icon: "ri-twitter-line", color: "blue-500" },
              { icon: "ri-facebook-line", color: "blue-500" },
              { icon: "ri-instagram-line", color: "pink-500" },
              { icon: "ri-youtube-line", color: "red-500" },
            ].map((item, i) => (
              <li
                key={i}
                className={`border rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-${item.color} transition-all duration-300`}
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
