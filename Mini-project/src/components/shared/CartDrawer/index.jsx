import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose, cartItems, setCartItems }) => {

  const handleIncrement = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    setCartItems(updated);
  };

  const handleDecrement = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCartItems(updated);
    }
  };

  const handleRemove = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={styles.drawer}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.header}>
              <h2>Shopping Cart</h2>
              <button onClick={onClose}>×</button>
            </div>

            <div className={styles.items}>
              {cartItems.length === 0 ? (
                <p className="text-white">Your cart is empty</p>
              ) : (
                cartItems.map((item, i) => (
                  <div key={i} className={styles.item}>
                    <img src={item.image} alt={item.title} />

                    <div style={{ flex: 1 }}>
                      <button
                        className={styles.quantity1remove}
                        onClick={() => handleRemove(i)}
                      >
                        ×
                      </button>
                      <p>{item.title}</p>
                      <p>Rs. {item.price}</p>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                          border: "1px solid #fff",
                          padding: "6px 12px",
                          borderRadius: "8px",
                        }}
                      >
                        <button
                          className={styles.quantity1decrement}
                          onClick={() => handleDecrement(i)}
                        >
                          –
                        </button>{" "}
                        <span className={styles.quantity1span}>
                          {item.quantity}
                        </span>
                        <button
                          className={styles.quantity1increment}
                          onClick={() => handleIncrement(i)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-4 border-t border-gray-600 pt-4">
              <h3 className="text-green-400 text-lg font-bold">Subtotal</h3>
              <p className="text-white mb-4">Rs. {subtotal}.00</p>
              <p className="text-sm text-gray-300 mb-4">
                Taxes and shipping calculated at checkout
              </p>
       <Link to="/checkout">
       <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-full w-full mb-2">
                Check Out
              </button></Link>
              
              <Link
  to="/cart"
  className="bg-white text-black py-2 px-4 rounded-full w-full text-center block"
>
  View Cart
</Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
