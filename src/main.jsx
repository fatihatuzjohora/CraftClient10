import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navber from "./Components/Navber/Navber.jsx";
import Footer from "./Components/Footer.jsx";
import Error from "./Components/Error.jsx";
import Home from "./Components/Navber/Home.jsx";
import AddCraftItem from "./Components/Navber/AddCraftItem.jsx";
import SingIn from "./Components/Navber/SingIn.jsx";
import AuthProvider from "./Components/Firebase/AuthProvider.jsx";
import Resister from "./Components/Navber/Resister.jsx";
import Profile from "./Components/Navber/Profile.jsx";
import AllCraft from "./Components/Navber/AllCraft.jsx";
import MyCraft from "./Components/Navber/MyCraft.jsx";
import CraftDitels from "./Components/ExtraRoute/CraftDitels.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        //loader: () => fetch("https://craft-henna-iota.vercel.app/craft"),
      },
      {
        path: "/allcraft",
        element: <AllCraft></AllCraft>,
        loader: () => fetch("https://craft-henna-iota.vercel.app/craft"),
      },
      {
        path: "/mycraft",
        element: <MyCraft></MyCraft>,
        loader: () => fetch("https://craft-henna-iota.vercel.app/craft"),
      },
      {
        path: "/signup",
        element:<Resister></Resister>
      },
      {
        path: "/signin",
        element: <SingIn></SingIn>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/addcraft",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/detiles",
        element: <CraftDitels></CraftDitels>,
        loader:()=>fetch(),
      },
    ],
  },
  {
    path: "/",
    element: <Navber></Navber>,
  },
  {
    path: "/",
    element: <Footer></Footer>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
