import React, { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAPIData } from "../../../http/api";
import { QueryKeys } from "../../constant/QueryKeys";
import Breadcrumbs from "../../shared/BreadCrumbs";
import BlogDetailContent from "../../shared/ShopDetails";

const Main = () => {
  const { id } = useParams();
  const { cartItems, setCartItems, setCartOpen } = useOutletContext();

  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.PRODUCTSTOTAL, id],
    queryFn: () =>
      getAPIData(`product-totals?populate=*&filters[slug][$eq]=${id}`),
  });

  const product = data?.[0];
  const attributes = product;
  const title = attributes?.title;

  const handleAddToCart = () => {
    if (!attributes || attributes.isSoldOut) return;

    const existingIndex = cartItems.findIndex(
      (item) => item.title === attributes.title
    );

    let updatedCart;
    if (existingIndex !== -1) {
      updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
    } else {
      updatedCart = [
        ...cartItems,
        {
          title: attributes.title,
          price: attributes.price,
          slug: id,
          quantity: 1,
          image: attributes.image?.url
            ? `http://localhost:1337${attributes.image.url}`
            : "https://via.placeholder.com/150",
        },
      ];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartOpen(true);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, [setCartItems]);

  if (isLoading)
    return <p className="text-center text-gray-400">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Error loading product.</p>
    );

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center p-9 bg-gradient-to-b from-[#0d4249] via-black to-[#3b0e49]">
        <h1 className="text-4xl font-bold text-white mb-4">Shop Details</h1>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: title || "Product", href: `/shop/${id}` },
          ]}
        />
      </div>

      <BlogDetailContent blog={attributes} onAddToCart={handleAddToCart} />
    </>
  );
};

export default Main;
