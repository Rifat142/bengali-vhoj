import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Roots from "./Roots/Roots";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import MoreComment from "./pages/MoreComment";

import AuthProvider from "./Authprovider/Authprovider";
import PrivateRoutes from "./Roots/PrivateRoutes";
import ErrorPage from "./pages/ErrorPage";
import FoodDetails from "./pages/FoodDetails";
import AllProducts from "./pages/All-products/AllProducts";
import OrderPage from "./pages/OrderPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/about-us",
        element: <PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>,
      },
      {
        path: "/comment",
        element: <PrivateRoutes><MoreComment></MoreComment></PrivateRoutes>,
      },
      {
        path: "/food-details/:id",
        element: <PrivateRoutes> <FoodDetails></FoodDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
       
      },
      {
        path:'/all-products',
        element: <AllProducts></AllProducts>,
        loader:()=>fetch(`http://localhost:5000/foods`)
        
      },
      {
        path:'/order-page/:id',
        element:<OrderPage></OrderPage>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
