import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/layout/layout';
import HomePage from "../pages/HomePage/HomePage";
import BlogsPage from "../pages/Blogs";
import BlogsDetailPage from "../pages/BlogsDetail";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/blogs",
        element: <BlogsPage />
      },,
      {
        path: "/blogs/:id",
        element: <BlogsDetailPage />
      }
    ],
  },
]);
