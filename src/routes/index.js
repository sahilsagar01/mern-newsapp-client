import React from "react";
import { Redirect } from "react-router-dom";


// Authentication related pages
import Login from "../pages/Login";
import Singup from "../pages/Singup";


// Dashboard
import Home from "../pages/Home";


const authProtectedRoutes = [
 
  { exact: true, path: "/", component: (props) => <Home {...props} /> },

  // this route should be at the end of all other routes
  {
    path: "/",
    exact: true,
    // component: (props) => <Dashboard {...props} />,
    component: () => <Redirect to="/" />,
  },
];

const publicRoutes = [
  { exact: true, path: "/login", component: Login },
  { exact: true, path: "/singup", component: Singup },

];

export { authProtectedRoutes, publicRoutes };