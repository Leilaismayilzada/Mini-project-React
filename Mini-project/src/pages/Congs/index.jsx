import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();
  const { orderData } = location.state || {}; 

  const [summary, setSummary] = useState([]);

  useEffect(() => {
    if (orderData?.cartItems?.length) {
      setSummary(orderData.cartItems);
    }
  }, [orderData]);

  const totalAmount = summary.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="text-white bg-black min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full bg-[#111217] rounded-xl shadow-lg p-8 text-left space-y-6 border border-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-green-400">🎉 Thank You!</h1>
          <p className="text-gray-400">Your order has been placed successfully.</p>
        </div>

        {orderData && (
          <div className="space-y-2 text-sm">
            <p><span className="text-gray-500">👤 Name:</span> {orderData.name}</p>
            <p><span className="text-gray-500">📧 Email:</span> {orderData.email}</p>
            <p><span className="text-gray-500">🏠 Address:</span> {orderData.address}</p>
          </div>
        )}
        <div className="border-t border-gray-700 pt-4">
          <h2 className="text-lg font-semibold mb-2 text-white">🛍️ Order Summary:</h2>
          <div className="space-y-1 text-sm text-gray-300">
            {summary.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.title} × {item.quantity}</span>
                <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="text-right mt-4 text-green-400 font-semibold">
            Total: Rs. {totalAmount.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
