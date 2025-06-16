import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/router";
import AuthProvider from "./Contexts/AuthProvider";
import { RouterProvider } from "react-router";

 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
