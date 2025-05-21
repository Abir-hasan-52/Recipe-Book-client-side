import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayOut from "./LayOuts/MainLayOut.jsx";
import Home from "./Components/Home.jsx";
import AddRecipe from "./Components/AddRecipe.jsx";
import MyRecipes from "./Components/MyRecipes.jsx";
import UpdateRecipe from "./Components/UpdateRecipe.jsx";
import TopRecipes from "./Components/TopRecipes.jsx";
import AllRecipes from "./Components/AllRecipes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        // loader:()=>fetch("http://localhost:3000/recipes/top"),
        Component: Home,
         
      },
      {
        path: "addRecipe",
        loader: () => fetch("http://localhost:3000/recipes"),
        Component: AddRecipe,
      },
      {
        path: "updateRecipe/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/recipes/${params.id}`),
        Component: UpdateRecipe,
      },
      {
        path: "MyRecipes",
        loader: () => fetch("http://localhost:3000/recipes"),
        Component: MyRecipes,
      },
      {
        path:"topRecipes",
        loader:()=>fetch("http://localhost:3000/recipes/top"),
        Component:TopRecipes,
      },
      {
        path:"AllRecipes",
        Component:AllRecipes,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
