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
import Blog from "./pages/Blog";
import Cart from "./pages/Mycart/Cart";
import AddedItem from "./pages/AddedItem/AddedItem";
import AddItem from "./pages/AddedItem/AddItem";
import UpdateProduct from "./pages/UpdateProduct";


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
        path:'/blog',
        element : <Blog></Blog>
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
        element:<PrivateRoutes><OrderPage></OrderPage></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path : '/cart',
        element:<PrivateRoutes><Cart></Cart></PrivateRoutes>,
      },
      {
        path:'/added-items',
        element:<PrivateRoutes><AddedItem></AddedItem></PrivateRoutes>
      },
      {
        path:'/add-item',
        element:<PrivateRoutes><AddItem></AddItem></PrivateRoutes>
      },
      {
        path:'/update/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      }

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
