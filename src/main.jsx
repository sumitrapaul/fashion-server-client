import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import ErrorPage from "./components/ErrorElement/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx";
import AddProduct from "./components/AddProduct/AddProduct";
import MyCart from "./components/MyCart/MyCart";
import Login from "./pages/Login/Login";
import AuthProvider from "./components/Provider/AuthProvider";
import Register from "./pages/Register/Register";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./Route/PrivateRoute";
import BrandDetails from "./pages/BrandDetails";
import BrandProductDetails from "./pages/BrandProductDetails";
import Update from "./components/Update/Update";
import MyReview from "./components/MyReview/MyReview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:brand_name",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <BrandProductDetails></BrandProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://fashion-store-server-nf3cslkv2-sumitra-pauls-projects.vercel.app/products/${params.id}`),
      },
      {
        path: "/carts",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
      <Toaster />
    </React.StrictMode>
  </AuthProvider>
);
