import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import HomePage from "../pages/HomePage/HomePage";
import BlogsPage from "../pages/Blogs";
import BlogsDetailPage from "../pages/BlogsDetail";
import ShopPage from "../pages/Shop";
import WishlistPage from "../pages/Whishlist";
import CartPage from "../pages/ShopCard";
import AiBlogDetailPage from "../components/sections/Home/HomeDetails/AIBlog";
import ShopDetailsPage from "../pages/ShopDetails";
import CheckoutPage from "../pages/Checkout";
import ThankYouPage from "../pages/Congs";

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
      {
        path: "/blogs/:id",
        element: <BlogsDetailPage />,
      },
      {
        path: "/home/:id",
        element: <AiBlogDetailPage />,
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
      {
        path: "/shop/:id",
        element: <ShopDetailsPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/thank-you",
        element: <ThankYouPage />,
      },

      
    ],
  },
]);

