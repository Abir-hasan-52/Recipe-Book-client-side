import { createBrowserRouter } from "react-router";
// import AuthProvider from "./Contexts/AuthProvider.jsx";
import MainLayOut from "../LayOuts/MainLayOut";
import AddRecipe from "../Components/AddRecipe";
import Home from "../Components/Home";
import UpdateRecipe from "../Components/UpdateRecipe";
import MyRecipes from "../Components/MyRecipes";
import TopRecipes from "../Components/TopRecipes";
import AllRecipes from "../Components/AllRecipes";
import Signin from "../Components/Signin";
import SignUp from "../Components/SignUp";
import RecipeDetails from "../Components/RecipeDetails";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "*",
        element: <ErrorPage />,
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
        path: "topRecipes",
        loader: () => fetch("http://localhost:3000/recipes/top"),
        Component: TopRecipes,
      },
      {
        path: "AllRecipes",
        loader: () => fetch("http://localhost:3000/recipes/AllRecipes"),
        Component: AllRecipes,
      },
      {
        path: "AllRecipes/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/recipes/AllRecipes/${params.id}`),
        Component: RecipeDetails,
      },
      {
        path: "signin",
        Component: Signin,
      },
      {
        path: "Signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
