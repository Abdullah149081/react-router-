import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./index.css";
import Contacts from "./components/Contacts/contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path:"/contact",
    element:<Contacts></Contacts>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
