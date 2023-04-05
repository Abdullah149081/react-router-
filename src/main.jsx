import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import First from "./components/First/First";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import UserDetails from "./components/UserDetails/UserDetails";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     errorElement: <ErrorPage></ErrorPage>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path:"/contact",
//     element:<Contacts></Contacts>
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "user",
        element: <User></User>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "user/:userID",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
