import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order";
import Register from "../pages/Register/Register";
import RegisterLayout from "../Layout/RegisterLayout";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

 export const router = createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'menu',
              element:<Menu></Menu>
            },
            {
              path:'order/:category',
              element:<Order></Order>
            },
            {
              path:'secret',
              element:<PrivateRoute><Secret></Secret></PrivateRoute>
            }
           
        ]    
      },
      {
        
          path:'register',
          element:<RegisterLayout></RegisterLayout>,
          children:[{
            path:'register',
            element:<Register></Register>
          }]
        
      },
      {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
          {
            path:'mycart',
            element:<MyCart></MyCart>
          },
          {
            path:'allusers',
            element:<AllUsers></AllUsers>
          }
        ]
      }
])