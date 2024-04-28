import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import App from "./App.jsx";
import Contact from "./Components/Navber/Contact.jsx";
import About from "./Components/Navber/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        //loader: () => fetch("https://craft-henna-iota.vercel.app/craft")
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
        element: <Resister></Resister>,
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
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/ditels/:_id",
        element: <CraftDitels></CraftDitels>,
        loader: () => fetch('https://craft-henna-iota.vercel.app/craft'),
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
