import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import GradientButton from "../../components/shared/ButtonGradient";

const CheckoutPage = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = () => {
    console.log("Order Placed:", formData, cartItems);
    setCartItems([]);
    localStorage.removeItem("cartItems");
    navigate("/thank-you", {
        state: {
          orderData: {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            cartItems,
          },
        },
      });
      
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10 md:px-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <div className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#111217] rounded border border-gray-700 text-white"
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#111217] rounded border border-gray-700 text-white"
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#111217] rounded border border-gray-700 text-white"
              rows={4}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between text-sm border-b border-gray-800 pb-2">
                <span>{item.title} × {item.quantity}</span>
                <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="text-lg font-bold mb-6">
            Total: Rs. {totalAmount.toFixed(2)}
          </div>

          <GradientButton onClick={handlePlaceOrder} className="w-full py-3 rounded-lg">
            Place Order
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
