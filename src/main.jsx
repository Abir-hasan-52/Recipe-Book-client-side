import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/router";
import AuthProvider from "./Contexts/AuthProvider";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

 const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}> 
  <StrictMode>
    <AuthProvider>
      
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
  </QueryClientProvider>
);
