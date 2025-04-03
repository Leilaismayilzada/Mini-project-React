import React, { useEffect, useState } from 'react';
import CartDrawer from '../shared/CartDrawer';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);
  return (
    <>
      <Header cartItems={cartItems} setCartOpen={setCartOpen} />
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <main>
        <Outlet context={{ cartItems, setCartItems, setCartOpen }} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;



