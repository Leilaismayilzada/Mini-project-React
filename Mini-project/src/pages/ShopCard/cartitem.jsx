import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, onRemove }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="grid grid-cols-12 items-center border-b border-gray-800 py-6">
        
      <div className="col-span-6 flex gap-4 items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-24 object-cover rounded-md border border-gray-700"
        />
        <div className="space-y-1">
          <p
            className="text-xs uppercase font-semibold"
            style={{ color: "rgb(153, 218, 147)" }}
          >
            {item.brand}
          </p>
          <h3 className="font-bold text-white text-base">{item.title}</h3>
          <p className="text-sm text-gray-400">Rs. {item.price}.00</p>
          <p className="text-xs text-gray-500">
            Orientation: {item.orientation} | Image Ratio: {item.ratio}
          </p>
        </div>
      </div>

      <div className="col-span-3 flex justify-center items-center gap-3 ">
        <div className="flex items-center border border-gray-500 rounded-full px-3 py-1">
          <button onClick={decrease} className="text-lg px-2 hover:text-white cursor-pointer">
            –
          </button>
          <span className="w-6 text-center">{quantity}</span>
          <button onClick={increase} className="text-lg px-2 hover:text-white cursor-pointer">
            +
          </button>
        </div>
        <button
          className="text-red-500 hover:text-red-700 cursor-pointer"
          onClick={() => onRemove(item)}
        >
          <FaTrash />
        </button>
      </div>

      <div
        className="col-span-3 text-right font-semibold text-base"
        style={{ color: "rgb(153, 218, 147)" }}
      >
        Rs. {(item.price * quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
