import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider";
import {
  // useQuery,
  // useMutation,
  useQueryClient,
  // QueryClient,
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'

// const queryClient = useQueryClient();

const queryClient = new  QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
   <QueryClientProvider client={queryClient}>
   <div className="max-w-screen-xl mx-auto">
          
          <RouterProvider router={router}></RouterProvider>
        
      </div>
    </QueryClientProvider>
     
   
    
    </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>
);
