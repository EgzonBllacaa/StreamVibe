import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <div className="overflow-x-hidden text-balance  bg-black-08 text-absolute-white">
      <App />
    </div>
  </QueryClientProvider>
  // </StrictMode>
);
