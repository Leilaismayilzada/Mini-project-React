import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import HomePage from "../pages/HomePage/HomePage";
import BlogsPage from "../pages/Blogs";
import BlogsDetailPage from "../pages/BlogsDetail";
import ShopPage from "../pages/Shop";
import WishlistPage from "../pages/Whishlist";
import CartPage from "../pages/ShopCard";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      ,
      {
        path: "/blogs/:id",
        element: <BlogsDetailPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },

      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
