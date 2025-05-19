import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayOut from './LayOuts/MainLayOut.jsx'
import Home from './Components/Home.jsx'
import AddRecipe from './Components/AddRecipe.jsx'
import MyRecipes from './Components/MyRecipes.jsx'


const router= createBrowserRouter([
  {
    path:'/',
    Component:MainLayOut,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'addRecipe',
        Component:AddRecipe,
      },
      {
        path:'MyRecipes',
        Component:MyRecipes,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
