import React from "react";
import { useOutletContext } from "react-router-dom";
import Breadcrumbs from "../../components/shared/BreadCrumbs";
import CartItem from "./cartitem";

const CartPage = () => {
  const { cartItems, setCartItems } = useOutletContext();

  const handleRemove = (product) => {
    const updated = cartItems.filter((item) => item.title !== product.title);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated)); // sinxron saxla
  };

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center p-9 bg-gradient-to-b from-[rgb(13,66,73)] via-[rgb(0,0,0)] to-[rgb(59,14,73)]">
        <div className="text-3xl font-bold p-5">Your Shopping Cart</div>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Your Shopping Cart", href: "/cart" },
          ]}
        />
      </div>


      <div className="max-w-[1240px] mx-auto px-14 py-8">
        <div
          className="grid grid-cols-12 border-b pb-4 text-sm uppercase font-semibold"
          style={{
            borderBottomColor: "rgb(153, 218, 147)",
            color: "rgb(153, 218, 147)",
          }}
        >
          <div className="col-span-6">Product</div>
          <div className="col-span-3 text-center">Quantity</div>
          <div className="col-span-3 text-right">Total</div>
        </div>

        <div className="space-y-6 mt-6">
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item, index) => (
              <CartItem  key={index} item={item} onRemove={handleRemove} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
