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
import PrivateRoute from "../routes/PrivateRoute";
import SavedRecipes from "../Pages/SavedRecipes/SavedRecipes";

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
        loader: () => fetch("https://recipe-book-server-sooty.vercel.app/recipes"),
         element: <PrivateRoute>
          <AddRecipe />
         </PrivateRoute>,
      },
      {
        path: "updateRecipe/:id",
        loader: ({ params }) =>
          fetch(`https://recipe-book-server-sooty.vercel.app/recipes/${params.id}`),
        Component: UpdateRecipe,
      },
      {
        path: "MyRecipes",
        loader: () => fetch("https://recipe-book-server-sooty.vercel.app/recipes/myRecipe"),
        element:  <PrivateRoute>
          <MyRecipes />
        </PrivateRoute>,
      },
      {
        path: "topRecipes",
        loader: () => fetch("https://recipe-book-server-sooty.vercel.app/recipes/top"),
        Component: TopRecipes,
      },
      {
        path: "AllRecipes",
        // loader: () => fetch("https://recipe-book-server-sooty.vercel.app/recipes/AllRecipes"),
        Component: AllRecipes,
      },
      {
        path: "AllRecipes/:id",
        loader: ({ params }) =>
          fetch(`https://recipe-book-server-sooty.vercel.app/recipes/AllRecipes/${params.id}`),
        element:<PrivateRoute>
          <RecipeDetails />
        </PrivateRoute> ,
      },
      {
        path:"savedRecipes:id",
        element:<SavedRecipes/>
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
