import React, { useEffect, useState } from "react";
import GradientButton from "../ButtonGradient";
import { useNavigate } from "react-router-dom";

const BlogDetailContent = ({ blog, onAddToCart }) => {
  const navigate = useNavigate();
  if (!blog) return null;

  const {
    title,
    description,
    image,
    hoverImage,
    thumbnails = [],
    price,
    orientation = "Square",
    ratios = ["4:3", "6:8"],
    isSoldOut,
  } = blog;

  const isAvailable = !isSoldOut;
  const [wishlistItems, setWishlistItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState("center");
  const [selectedRatio, setSelectedRatio] = useState("4:3");

  // Set image based on selected ratio
  const imageUrl =
    selectedRatio === "4:3"
      ? image?.url
        ? `http://localhost:1337${image.url}`
        : "https://via.placeholder.com/800x400"
      : hoverImage?.url
      ? `http://localhost:1337${hoverImage.url}`
      : "https://via.placeholder.com/800x400";

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleSubtract = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (typeof onAddToCart === "function") {
      onAddToCart({ ...blog, quantity });
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  const handleToggleWishlist = (product) => {
    const currentWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = currentWishlist.find((item) => item.title === product.title);
    if (exists) {
      navigate("/wishlist");
    } else {
      const updatedWishlist = [...currentWishlist, product];
      localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
      setWishlistItems(updatedWishlist);
    }
  };

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  return (
    <div className="text-white min-h-screen px-6 py-10 md:px-16 flex flex-col md:flex-row gap-10">
      <div className="flex-1 flex flex-col items-center relative">
        <div
          className="overflow-hidden rounded-xl w-full max-w-md mb-6 group"
          onMouseMove={handleMouseMove}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{ transformOrigin }}
            className="w-full rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-150"
          />
        </div>

        <div className="flex gap-4">
          {thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={
                thumb?.url
                  ? `http://localhost:1337${thumb.url}`
                  : "https://via.placeholder.com/100"
              }
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 rounded-md border border-gray-700 object-cover"
            />
          ))}
        </div>
      </div>

      <div className="flex-1 max-w-xl">
        <p className="text-green-400 text-sm mb-2">{title}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-400 mb-4">{description}</p>

        <p className="text-green-400 text-xl font-bold mb-4">Rs. {price}</p>

        <div className="mb-4">
          <p className="text-gray-400 mb-1">Orientation:</p>
          <p className="font-medium">{orientation}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-400 mb-1">Image Ratio:</p>
          <div className="flex gap-3">
            {ratios.map((r, index) => (
              <button
                key={index}
                onClick={() => setSelectedRatio(r)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedRatio === r
                    ? "bg-purple-700 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-400 mb-1">Sub total:</p>
          <p className="font-medium">Rs. {price * quantity}</p>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <button onClick={handleSubtract} className="bg-gray-800 text-white px-4 py-2 rounded-full">-</button>
          <span>{quantity}</span>
          <button onClick={handleAdd} className="bg-gray-800 text-white px-4 py-2 rounded-full">+</button>
          <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full shadow-sm ${
            isAvailable
              ? "bg-green-900 text-green-400 border border-green-600"
              : "bg-red-900 text-red-400 border border-red-600"
          }`}>
            {isAvailable ? "✅ In Stock" : "❌ Sold Out"}
          </span>
        </div>

        {isAvailable ? (
          <GradientButton onClick={handleAddToCart} className="w-full py-3 rounded-lg mb-6">
            Add to Cart
          </GradientButton>
        ) : (
          <button
            disabled
            className="w-full bg-gray-800 text-gray-400 font-semibold py-3 rounded-lg mb-6 cursor-not-allowed border border-gray-600 tracking-wider"
          >
           <i class="ri-git-repository-private-line"></i> Sold Out
          </button>
        )}

        <button
          onClick={() =>
            handleToggleWishlist({
              title,
              price,
              image: image?.url
                ? `http://localhost:1337${image.url}`
                : "https://via.placeholder.com/150",
            })
          }
          className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors duration-300 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill={
              wishlistItems.some((item) => item.title === title)
                ? "#f43f5e"
                : "currentColor"
            }
          >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
          {wishlistItems.some((item) => item.title === title)
            ? "In Wishlist"
            : "Add to Wishlist"}
        </button>

        <div className="text-sm text-gray-400 space-y-2 mb-6">
          <p><i class="ri-shopping-bag-line"></i> Estimated delivery: 5–7 Days from order date.</p>
          <p><i class="ri-caravan-line"></i>Free Shipping & Returns: On orders above $79</p>
        </div>

        
      </div>
    </div>
  );
};

export default BlogDetailContent;
